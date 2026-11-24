from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_config_value_option1 import (
    GoogleCloudApihubV1ConfigValueOption1,
    GoogleCloudApihubV1ConfigValueOption1Dict,
)
from .google_cloud_apihub_v1_multi_int_values2 import (
    GoogleCloudApihubV1MultiIntValues2,
    GoogleCloudApihubV1MultiIntValues2Dict,
)
from .google_cloud_apihub_v1_multi_select_values2 import (
    GoogleCloudApihubV1MultiSelectValues2,
    GoogleCloudApihubV1MultiSelectValues2Dict,
)
from .google_cloud_apihub_v1_multi_string_values2 import (
    GoogleCloudApihubV1MultiStringValues2,
    GoogleCloudApihubV1MultiStringValues2Dict,
)
from .google_cloud_apihub_v1_secret5 import GoogleCloudApihubV1Secret5, GoogleCloudApihubV1Secret5Dict


class GoogleCloudApihubV1ConfigVariable(SdkBaseModel):
    """ConfigVariable represents a additional configuration variable present in a PluginInstance Config or AuthConfig,
    based on a ConfigVariableTemplate."""

    int_value: Optional[str] = Field(default=UNSET, alias="intValue")
    """Optional. The config variable value in case of config variable of type integer."""

    multi_string_values: Optional[GoogleCloudApihubV1MultiStringValues2] = Field(
        default=UNSET, alias="multiStringValues"
    )
    """Optional. The config variable value in case of config variable of type multi string."""

    string_value: Optional[str] = Field(default=UNSET, alias="stringValue")
    """Optional. The config variable value in case of config variable of type string."""

    multi_select_values: Optional[GoogleCloudApihubV1MultiSelectValues2] = Field(
        default=UNSET, alias="multiSelectValues"
    )
    """Optional. The config variable value in case of config variable of type multi select."""

    bool_value: Optional[bool] = Field(default=UNSET, alias="boolValue")
    """Optional. The config variable value in case of config variable of type boolean."""

    secret_value: Optional[GoogleCloudApihubV1Secret5] = Field(default=UNSET, alias="secretValue")
    """Optional. The config variable value in case of config variable of type secret."""

    multi_int_values: Optional[GoogleCloudApihubV1MultiIntValues2] = Field(default=UNSET, alias="multiIntValues")
    """Optional. The config variable value in case of config variable of type multi integer."""

    key: Optional[str] = UNSET
    """Output only. Key will be the id to uniquely identify the config variable."""

    enum_value: Optional[GoogleCloudApihubV1ConfigValueOption1] = Field(default=UNSET, alias="enumValue")
    """Optional. The config variable value in case of config variable of type enum."""


class GoogleCloudApihubV1ConfigVariableDict(TypedDict):
    int_value: NotRequired[str]
    multi_string_values: NotRequired[GoogleCloudApihubV1MultiStringValues2Dict]
    string_value: NotRequired[str]
    multi_select_values: NotRequired[GoogleCloudApihubV1MultiSelectValues2Dict]
    bool_value: NotRequired[bool]
    secret_value: NotRequired[GoogleCloudApihubV1Secret5Dict]
    multi_int_values: NotRequired[GoogleCloudApihubV1MultiIntValues2Dict]
    key: NotRequired[str]
    enum_value: NotRequired[GoogleCloudApihubV1ConfigValueOption1Dict]
