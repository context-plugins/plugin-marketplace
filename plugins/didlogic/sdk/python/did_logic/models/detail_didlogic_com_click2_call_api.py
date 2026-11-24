from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DetailDidlogicComClick2CallApi(SdkBaseModel):
    code: str
    message: str
    field: str | None


class DetailDidlogicComClick2CallApiDict(TypedDict):
    code: str
    message: str
    field: str | None
