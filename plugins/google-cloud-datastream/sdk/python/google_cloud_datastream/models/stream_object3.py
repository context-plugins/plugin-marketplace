from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .backfill_job2 import BackfillJob2, BackfillJob2Dict
from .customization_rule import CustomizationRule, CustomizationRuleDict
from .error import Error, ErrorDict
from .source_object_identifier4 import SourceObjectIdentifier4, SourceObjectIdentifier4Dict


class StreamObject3(SdkBaseModel):
    """The stream object resource the backfill job was stopped for."""

    name: Optional[str] = UNSET
    """Output only. Identifier. The object resource's name."""

    customization_rules: Optional[list[CustomizationRule]] = Field(default=UNSET, alias="customizationRules")
    """Output only. The customization rules for the object. These rules are derived from the parent Stream's
    ``rule_sets`` and represent the intended configuration for the object."""

    source_object: Optional[SourceObjectIdentifier4] = Field(default=UNSET, alias="sourceObject")
    """The object identifier in the data source."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. The creation time of the object."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. The last update time of the object."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Required. Display name."""

    errors: Optional[list[Error]] = UNSET
    """Output only. Active errors on the object."""

    backfill_job: Optional[BackfillJob2] = Field(default=UNSET, alias="backfillJob")
    """The latest backfill job that was initiated for the stream object."""


class StreamObject3Dict(TypedDict):
    name: NotRequired[str]
    customization_rules: NotRequired[list[CustomizationRuleDict]]
    source_object: NotRequired[SourceObjectIdentifier4Dict]
    create_time: NotRequired[str]
    update_time: NotRequired[str]
    display_name: NotRequired[str]
    errors: NotRequired[list[ErrorDict]]
    backfill_job: NotRequired[BackfillJob2Dict]
