from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1ManageFormsDuplicateResponse(SdkBaseModel):
    id: str
    name: str
    slug: str
    status: Literal["draft"] = "draft"
    source: str
    """The form this copy came from."""

    url: str


class ApiV1ManageFormsDuplicateResponseDict(TypedDict):
    id: str
    name: str
    slug: str
    status: Literal["draft"]
    source: str
    url: str
