from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .unions.template1 import Template1, Template1Dict


class CloudDiagramsGetRequest(SdkBaseModel):
    """Request body for getting diagram components. Leave empty to retrieve all accessible diagrams (returns scheme map
    only)."""

    scheme: Optional[list[str]] = UNSET
    """IDs of diagrams to load."""

    statussheet: Optional[list[str]] = UNSET
    """IDs of layers to load."""

    template: Optional[Template1] = UNSET
    """Template type or array of template layer IDs to include."""


class CloudDiagramsGetRequestDict(TypedDict):
    scheme: NotRequired[list[str]]
    statussheet: NotRequired[list[str]]
    template: NotRequired[Template1Dict]
