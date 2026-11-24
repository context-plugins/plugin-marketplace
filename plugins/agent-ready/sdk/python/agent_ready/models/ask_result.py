from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .schema_object import SchemaObject, SchemaObjectDict


class AskResult(SdkBaseModel):
    """An NLWeb result object."""

    url: str
    name: str
    site: str
    score: float
    """Relevance score (BM25)."""

    description: str
    schema_object: SchemaObject
    """Schema.org JSON-LD for a result."""


class AskResultDict(TypedDict):
    url: str
    name: str
    site: str
    score: float
    description: str
    schema_object: SchemaObjectDict
