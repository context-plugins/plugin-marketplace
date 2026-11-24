from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.value_type import ValueTypeOrStr
from .google_cloud_apihub_v1_config_value_option import (
    GoogleCloudApihubV1ConfigValueOption,
    GoogleCloudApihubV1ConfigValueOptionDict,
)


class GoogleCloudApihubV1ConfigVariableTemplate(SdkBaseModel):
    """ConfigVariableTemplate represents a configuration variable template present in a Plugin Config."""

    required: Optional[bool] = UNSET
    """Optional. Flag represents that this ``ConfigVariable`` must be provided for a PluginInstance."""

    description: Optional[str] = UNSET
    """Optional. Description."""

    enum_options: Optional[list[GoogleCloudApihubV1ConfigValueOption]] = Field(default=UNSET, alias="enumOptions")
    """Optional. Enum options. To be populated if ``ValueType`` is ``ENUM``."""

    id: Optional[str] = UNSET
    """Required. ID of the config variable. Must be unique within the configuration."""

    multi_select_options: Optional[list[GoogleCloudApihubV1ConfigValueOption]] = Field(
        default=UNSET, alias="multiSelectOptions"
    )
    """Optional. Multi select options. To be populated if ``ValueType`` is ``MULTI_SELECT``."""

    validation_regex: Optional[str] = Field(default=UNSET, alias="validationRegex")
    """Optional. Regular expression in RE2 syntax used for validating the ``value`` of a ``ConfigVariable``."""

    value_type: Optional[ValueTypeOrStr] = Field(default=UNSET, alias="valueType")
    """Required. Type of the parameter: string, int, bool etc."""


class GoogleCloudApihubV1ConfigVariableTemplateDict(TypedDict):
    required: NotRequired[bool]
    description: NotRequired[str]
    enum_options: NotRequired[list[GoogleCloudApihubV1ConfigValueOptionDict]]
    id: NotRequired[str]
    multi_select_options: NotRequired[list[GoogleCloudApihubV1ConfigValueOptionDict]]
    validation_regex: NotRequired[str]
    value_type: NotRequired[ValueTypeOrStr]
