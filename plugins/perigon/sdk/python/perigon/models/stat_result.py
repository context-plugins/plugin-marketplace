from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class StatResult(SdkBaseModel):
    status: OptionalNullable[int] = UNSET
    """HTTP status code for the response."""

    results: OptionalNullable[list[Any]] = UNSET
    """Statistics returned by the request."""

    num_results: OptionalNullable[int] = Field(default=UNSET, alias="numResults")
    """Total number of matching records, when calculated by the endpoint."""


class StatResultDict(TypedDict):
    status: NotRequired[int | None]
    results: NotRequired[list[Any] | None]
    num_results: NotRequired[int | None]
