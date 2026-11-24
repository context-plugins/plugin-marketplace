from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_config_value_option import (
    GoogleCloudApihubV1ConfigValueOption,
    GoogleCloudApihubV1ConfigValueOptionDict,
)


class GoogleCloudApihubV1MultiSelectValues2(SdkBaseModel):
    """Optional. The config variable value in case of config variable of type multi select."""

    values: Optional[list[GoogleCloudApihubV1ConfigValueOption]] = UNSET
    """Optional. The config variable value of data type multi select."""


class GoogleCloudApihubV1MultiSelectValues2Dict(TypedDict):
    values: NotRequired[list[GoogleCloudApihubV1ConfigValueOptionDict]]
