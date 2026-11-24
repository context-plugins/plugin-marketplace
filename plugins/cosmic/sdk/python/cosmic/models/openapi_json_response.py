from __future__ import annotations

from typing import Any

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class OpenapiJsonResponse(SdkBaseModel):
    """An OpenAPI 3.1 document."""

    openapi: str
    info: Any
    paths: Any


class OpenapiJsonResponseDict(TypedDict):
    openapi: str
    info: Any
    paths: Any
