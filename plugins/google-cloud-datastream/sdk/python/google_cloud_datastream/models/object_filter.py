from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .source_object_identifier1 import SourceObjectIdentifier1, SourceObjectIdentifier1Dict


class ObjectFilter(SdkBaseModel):
    """Object filter to apply the rules to."""

    source_object_identifier: Optional[SourceObjectIdentifier1] = Field(default=UNSET, alias="sourceObjectIdentifier")
    """Specific source object identifier."""


class ObjectFilterDict(TypedDict):
    source_object_identifier: NotRequired[SourceObjectIdentifier1Dict]
