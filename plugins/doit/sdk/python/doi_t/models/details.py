from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Details(SdkBaseModel):
    """Optional metadata about the result."""

    value_aliases: Optional[dict[str, str]] = Field(default=UNSET, alias="valueAliases")
    """Display aliases for values that appear in ``rows``, keyed by dimension id and then by the stored value (for
    example ``{"fixed:cloud_provider": {"datadog_prod": "Datadog (prod)"}}``). Rows keep the stored values so they can
    be fed back into filters; apply the alias only when presenting a value. Present only when the customer has renamed a
    DataHub dataset whose dimension is part of the report."""


class DetailsDict(TypedDict):
    value_aliases: NotRequired[dict[str, str]]
