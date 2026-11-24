from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class VectorData(SdkBaseModel):
    """Vector embeddings associated with the article, when requested."""

    data: OptionalNullable[list[float]] = UNSET
    """Numeric values in the vector embedding."""

    version: OptionalNullable[int] = UNSET
    """Version of the embedding representation."""


class VectorDataDict(TypedDict):
    data: NotRequired[list[float] | None]
    version: NotRequired[int | None]
