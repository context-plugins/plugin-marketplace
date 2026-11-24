from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .meta import Meta, MetaDict


class ChangeCursorExpiredResponseError(SdkBaseModel):
    ok: Literal["False"] = "False"
    error: Literal["cursor_expired"] = "cursor_expired"
    message: str
    meta: Meta


class ChangeCursorExpiredResponseErrorDict(TypedDict):
    ok: Literal["False"]
    error: Literal["cursor_expired"]
    message: str
    meta: MetaDict
