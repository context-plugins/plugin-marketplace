from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class Value(SdkBaseModel):
    id: Optional[str] = UNSET
    """The reporting article's id"""

    source: OptionalNullable[str] = UNSET
    """The reporting source's name"""

    normalized_value: Optional[float] = UNSET
    """The figure in absolute base units"""

    value: Optional[str] = UNSET
    """The figure as originally stated"""


class ValueDict(TypedDict):
    id: NotRequired[str]
    source: NotRequired[str | None]
    normalized_value: NotRequired[float]
    value: NotRequired[str]
