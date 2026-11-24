from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_auth_config_template2 import (
    GoogleCloudApihubV1AuthConfigTemplate2,
    GoogleCloudApihubV1AuthConfigTemplate2Dict,
)
from .google_cloud_apihub_v1_config_variable_template import (
    GoogleCloudApihubV1ConfigVariableTemplate,
    GoogleCloudApihubV1ConfigVariableTemplateDict,
)


class GoogleCloudApihubV1ConfigTemplate(SdkBaseModel):
    """ConfigTemplate represents the configuration template for a plugin."""

    additional_config_template: Optional[list[GoogleCloudApihubV1ConfigVariableTemplate]] = Field(
        default=UNSET, alias="additionalConfigTemplate"
    )
    """Optional. The list of additional configuration variables for the plugin's configuration."""

    auth_config_template: Optional[GoogleCloudApihubV1AuthConfigTemplate2] = Field(
        default=UNSET, alias="authConfigTemplate"
    )
    """Optional. The authentication template for the plugin."""


class GoogleCloudApihubV1ConfigTemplateDict(TypedDict):
    additional_config_template: NotRequired[list[GoogleCloudApihubV1ConfigVariableTemplateDict]]
    auth_config_template: NotRequired[GoogleCloudApihubV1AuthConfigTemplate2Dict]
