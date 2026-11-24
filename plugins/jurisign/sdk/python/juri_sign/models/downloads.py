from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class Downloads(SdkBaseModel):
    signed_pdf: OptionalNullable[str] = UNSET
    proof: OptionalNullable[str] = UNSET


class DownloadsDict(TypedDict):
    signed_pdf: NotRequired[str | None]
    proof: NotRequired[str | None]
