from ckan.common import CKANConfig
import ckan.plugins as plugins
import ckan.plugins.toolkit as toolkit


class XaminPlugin(plugins.SingletonPlugin):
    plugins.implements(plugins.IConfigurer)
    

    # IConfigurer
    def update_config(self, config: CKANConfig):
        toolkit.add_template_directory(config, "templates")
        toolkit.add_public_directory(config, "public")
        toolkit.add_resource("assets", "xamin")
def block_user_list(context, data_dict):
        toolkit.abort(403, "Access to this endpoint is restricted")
def get_actions(self):
	return {
		'user_list': self.block_user_list	
	}    
