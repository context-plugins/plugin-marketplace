from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Gs1Value(SdkBaseModel):
    key: Optional[str] = UNSET
    """A valid GS1 application identifier, qualifier, attribute, etc."""

    value: Optional[str] = UNSET
    """A syntactically correct value associated with the application identifier in the key field."""


class Gs1ValueDict(TypedDict):
    key: NotRequired[str]
    value: NotRequired[str]
