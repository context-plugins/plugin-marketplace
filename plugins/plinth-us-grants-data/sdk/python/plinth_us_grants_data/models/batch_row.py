from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BatchRow(SdkBaseModel):
    ein: Optional[str] = UNSET
    """EIN in any format (131837418 or 13-1837418). Either this or ``name``."""

    name: Optional[str] = UNSET
    """Organization name to resolve when no EIN is known. Matched exactly after normalizing case and punctuation; a name
    several organizations share answers ``ambiguous`` with the candidates, and ``state`` narrows it."""

    state: Optional[str] = UNSET
    """Two-letter state, used only to narrow a ``name`` that matches in several states."""

    field: str
    """One key from GET /batch/fields."""

    year: Optional[int] = UNSET
    """Filing year, for the grant-graph fields. Ignored, with a note, on fields that read the latest filing."""

    to: Optional[str] = UNSET
    """Second EIN, for the pair fields (grants_to_*): the recipient, where the row's organization is the funder."""


class BatchRowDict(TypedDict):
    ein: NotRequired[str]
    name: NotRequired[str]
    state: NotRequired[str]
    field: str
    year: NotRequired[int]
    to: NotRequired[str]
