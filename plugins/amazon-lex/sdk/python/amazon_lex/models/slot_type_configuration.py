from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .slot_type_regex_configuration import SlotTypeRegexConfiguration, SlotTypeRegexConfigurationDict


class SlotTypeConfiguration(SdkBaseModel):
    regex_configuration: Optional[SlotTypeRegexConfiguration] = Field(default=UNSET, alias="regexConfiguration")


class SlotTypeConfigurationDict(TypedDict):
    regex_configuration: NotRequired[SlotTypeRegexConfigurationDict]
