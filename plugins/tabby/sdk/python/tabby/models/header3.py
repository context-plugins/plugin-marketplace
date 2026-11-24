from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class Header3(SdkBaseModel):
    title: OptionalNullable[str] = UNSET
    """Arbitrary header name to sign the request."""

    value: OptionalNullable[str] = UNSET
    """Random string to sign the request."""


class Header3Dict(TypedDict):
    title: NotRequired[str | None]
    value: NotRequired[str | None]
