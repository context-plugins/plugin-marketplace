from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApigatewayApiConfigFile3(SdkBaseModel):
    """The OpenAPI Specification document file."""

    contents: Optional[str] = UNSET
    """The bytes that constitute the file."""

    path: Optional[str] = UNSET
    """The file path (full or relative path). This is typically the path of the file when it is uploaded."""


class ApigatewayApiConfigFile3Dict(TypedDict):
    contents: NotRequired[str]
    path: NotRequired[str]
