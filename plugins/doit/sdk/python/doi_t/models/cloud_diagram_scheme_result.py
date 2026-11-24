from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cloud_diagram_scheme_statussheet_info import (
    CloudDiagramSchemeStatussheetInfo,
    CloudDiagramSchemeStatussheetInfoDict,
)
from .enums.type9 import Type9OrStr


class CloudDiagramSchemeResult(SdkBaseModel):
    """A diagram with its connected cloud accounts."""

    id: str = Field(alias="_id")
    """Diagram ID."""

    name: str
    """Diagram name."""

    color: Optional[str] = UNSET
    """Diagram color."""

    type_: Type9OrStr = Field(alias="type")
    """Diagram type."""

    statussheet: list[CloudDiagramSchemeStatussheetInfo]
    """Connected cloud accounts (layers)."""


class CloudDiagramSchemeResultDict(TypedDict):
    id: str
    name: str
    color: NotRequired[str]
    type_: Type9OrStr
    statussheet: list[CloudDiagramSchemeStatussheetInfoDict]
