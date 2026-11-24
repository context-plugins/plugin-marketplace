from .create_ota_update_error import CreateOtaUpdateErrorBody, create_ota_update_error_mapper
from .create_software_configuration_error import (
    CreateSoftwareConfigurationErrorBody,
    create_software_configuration_error_mapper,
)
from .delete_ota_update_error import DeleteOtaUpdateErrorBody, delete_ota_update_error_mapper
from .delete_software_configuration_error import (
    DeleteSoftwareConfigurationErrorBody,
    delete_software_configuration_error_mapper,
)
from .describe_software_configuration_error import (
    DescribeSoftwareConfigurationErrorBody,
    describe_software_configuration_error_mapper,
)
from .get_ota_update_error import GetOtaUpdateErrorBody, get_ota_update_error_mapper
from .list_ota_updates_error import ListOtaUpdatesErrorBody, list_ota_updates_error_mapper
from .list_software_configurations_error import (
    ListSoftwareConfigurationsErrorBody,
    list_software_configurations_error_mapper,
)
from .list_tags_for_resource_error import ListTagsForResourceErrorBody, list_tags_for_resource_error_mapper
from .tag_resource_error import TagResourceErrorBody, tag_resource_error_mapper
from .update_software_configuration_error import (
    UpdateSoftwareConfigurationErrorBody,
    update_software_configuration_error_mapper,
)

__all__ = [
    "CreateOtaUpdateErrorBody",
    "CreateSoftwareConfigurationErrorBody",
    "DeleteOtaUpdateErrorBody",
    "DeleteSoftwareConfigurationErrorBody",
    "DescribeSoftwareConfigurationErrorBody",
    "GetOtaUpdateErrorBody",
    "ListOtaUpdatesErrorBody",
    "ListSoftwareConfigurationsErrorBody",
    "ListTagsForResourceErrorBody",
    "TagResourceErrorBody",
    "UpdateSoftwareConfigurationErrorBody",
    "create_ota_update_error_mapper",
    "create_software_configuration_error_mapper",
    "delete_ota_update_error_mapper",
    "delete_software_configuration_error_mapper",
    "describe_software_configuration_error_mapper",
    "get_ota_update_error_mapper",
    "list_ota_updates_error_mapper",
    "list_software_configurations_error_mapper",
    "list_tags_for_resource_error_mapper",
    "tag_resource_error_mapper",
    "update_software_configuration_error_mapper",
]
