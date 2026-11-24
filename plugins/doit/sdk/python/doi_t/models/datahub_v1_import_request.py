from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import Date, SdkBaseModel


class DatahubV1ImportRequest(SdkBaseModel):
    provider: str
    """Existing dataset (provider) name."""

    schema_template: str = Field(alias="schemaTemplate")
    """Versioned schema template of the records."""

    period_start: Date = Field(alias="periodStart")
    period_end: Date = Field(alias="periodEnd")
    replace: bool = False
    """Same semantics as the ``replace`` field of the CSV upload."""

    records: list[Any]
    """One object per source row; keys are the template's CSV column names. Decimals may be strings or numbers."""


class DatahubV1ImportRequestDict(TypedDict):
    provider: str
    schema_template: str
    period_start: Date
    period_end: Date
    replace: NotRequired[bool]
    records: list[Any]
