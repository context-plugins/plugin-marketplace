from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .backfill_all_strategy1 import BackfillAllStrategy1, BackfillAllStrategy1Dict
from .destination_config2 import DestinationConfig2, DestinationConfig2Dict
from .enums.state1 import State1OrStr
from .error import Error, ErrorDict
from .rule_set import RuleSet, RuleSetDict
from .source_config2 import SourceConfig2, SourceConfig2Dict


class Stream(SdkBaseModel):
    """A resource representing streaming data from a source to a destination."""

    customer_managed_encryption_key: Optional[str] = Field(default=UNSET, alias="customerManagedEncryptionKey")
    """Immutable. A reference to a KMS encryption key. If provided, it will be used to encrypt the data. If left blank,
    data will be encrypted using an internal Stream-specific encryption key provisioned through KMS."""

    destination_config: Optional[DestinationConfig2] = Field(default=UNSET, alias="destinationConfig")
    """Required. Destination connection profile configuration."""

    last_recovery_time: Optional[str] = Field(default=UNSET, alias="lastRecoveryTime")
    """Output only. If the stream was recovered, the time of the last recovery. Note: This field is currently
    experimental."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. The last update time of the stream."""

    name: Optional[str] = UNSET
    """Output only. Identifier. The stream's name."""

    state: Optional[State1OrStr] = UNSET
    """The state of the stream."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. The creation time of the stream."""

    satisfies_pzs: Optional[bool] = Field(default=UNSET, alias="satisfiesPzs")
    """Output only. Reserved for future use."""

    satisfies_pzi: Optional[bool] = Field(default=UNSET, alias="satisfiesPzi")
    """Output only. Reserved for future use."""

    rule_sets: Optional[list[RuleSet]] = Field(default=UNSET, alias="ruleSets")
    """Optional. Rule sets to apply to the stream."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Required. Display name."""

    source_config: Optional[SourceConfig2] = Field(default=UNSET, alias="sourceConfig")
    """Required. Source connection profile configuration."""

    backfill_none: Optional[Any] = Field(default=UNSET, alias="backfillNone")
    """Do not automatically backfill any objects."""

    labels: Optional[dict[str, str]] = UNSET
    """Labels."""

    errors: Optional[list[Error]] = UNSET
    """Output only. Errors on the Stream."""

    backfill_all: Optional[BackfillAllStrategy1] = Field(default=UNSET, alias="backfillAll")
    """Automatically backfill objects included in the stream source configuration. Specific objects can be excluded."""


class StreamDict(TypedDict):
    customer_managed_encryption_key: NotRequired[str]
    destination_config: NotRequired[DestinationConfig2Dict]
    last_recovery_time: NotRequired[str]
    update_time: NotRequired[str]
    name: NotRequired[str]
    state: NotRequired[State1OrStr]
    create_time: NotRequired[str]
    satisfies_pzs: NotRequired[bool]
    satisfies_pzi: NotRequired[bool]
    rule_sets: NotRequired[list[RuleSetDict]]
    display_name: NotRequired[str]
    source_config: NotRequired[SourceConfig2Dict]
    backfill_none: NotRequired[Any]
    labels: NotRequired[dict[str, str]]
    errors: NotRequired[list[ErrorDict]]
    backfill_all: NotRequired[BackfillAllStrategy1Dict]
