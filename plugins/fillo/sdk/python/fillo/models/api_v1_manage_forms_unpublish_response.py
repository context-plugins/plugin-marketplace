from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1ManageFormsUnpublishResponse(SdkBaseModel):
    id: str
    name: str
    slug: str
    status: Literal["draft"] = "draft"
    changed: bool


class ApiV1ManageFormsUnpublishResponseDict(TypedDict):
    id: str
    name: str
    slug: str
    status: Literal["draft"]
    changed: bool
