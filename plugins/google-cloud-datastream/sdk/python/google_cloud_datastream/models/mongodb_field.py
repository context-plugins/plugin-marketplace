from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MongodbField(SdkBaseModel):
    """MongoDB Field."""

    field: Optional[str] = UNSET
    """The field name."""


class MongodbFieldDict(TypedDict):
    field: NotRequired[str]
