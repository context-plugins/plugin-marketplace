from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class ResponseOptionsVariables(SdkBaseModel):
    """Variables returned in the response."""

    model_config = ConfigDict(extra="forbid")

    include: bool
    """Indicates whether to include variables in the response."""

    filter: OptionalNullable[list[str]] = UNSET
    """Filter the returned variables. If missing, null, or empty, no filtering is applied."""

    only_changed: bool = Field(alias="onlyChanged")
    """Indicates whether the response contains only changed variables."""


class ResponseOptionsVariablesDict(TypedDict):
    include: bool
    filter: NotRequired[list[str] | None]
    only_changed: bool
