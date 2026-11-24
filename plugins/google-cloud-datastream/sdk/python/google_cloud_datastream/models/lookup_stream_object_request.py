from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .source_object_identifier2 import SourceObjectIdentifier2, SourceObjectIdentifier2Dict


class LookupStreamObjectRequest(SdkBaseModel):
    """Request for looking up a specific stream object by its source object identifier."""

    source_object_identifier: Optional[SourceObjectIdentifier2] = Field(default=UNSET, alias="sourceObjectIdentifier")
    """Required. The source object identifier which maps to the stream object."""


class LookupStreamObjectRequestDict(TypedDict):
    source_object_identifier: NotRequired[SourceObjectIdentifier2Dict]
