from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class FieldModel(SdkBaseModel):
    id: str
    label: str
    kind: str
    answered: int
    """How many accepted responses answered this field."""

    distribution: Optional[dict[str, int]] = UNSET
    """Option label → count, present only for choice-like fields (top 20 by count)."""


class FieldModelDict(TypedDict):
    id: str
    label: str
    kind: str
    answered: int
    distribution: NotRequired[dict[str, int]]
