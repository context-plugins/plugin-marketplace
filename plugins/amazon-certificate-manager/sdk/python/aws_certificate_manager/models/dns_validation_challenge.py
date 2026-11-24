from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .resource_record import ResourceRecord, ResourceRecordDict


class DnsValidationChallenge(SdkBaseModel):
    resource_record: Optional[ResourceRecord] = Field(default=UNSET, alias="ResourceRecord")


class DnsValidationChallengeDict(TypedDict):
    resource_record: NotRequired[ResourceRecordDict]
