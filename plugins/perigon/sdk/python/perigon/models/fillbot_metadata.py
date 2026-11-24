from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .filled_field import FilledField, FilledFieldDict


class FillbotMetadata(SdkBaseModel):
    """Provenance for event fields populated by the enrichment process."""

    filled_fields: OptionalNullable[list[FilledField]] = Field(default=UNSET, alias="filledFields")
    """Event fields populated by enrichment and the sources used for each field."""


class FillbotMetadataDict(TypedDict):
    filled_fields: NotRequired[list[FilledFieldDict] | None]
