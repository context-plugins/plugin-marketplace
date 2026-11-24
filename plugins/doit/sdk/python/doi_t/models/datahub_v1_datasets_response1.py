from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class DatahubV1DatasetsResponse1(SdkBaseModel):
    name: Optional[str] = UNSET
    """The name of the dataset."""

    description: Optional[str] = UNSET
    """The description of the dataset."""

    records: OptionalNullable[int] = UNSET
    """The number of records in the dataset."""

    updated_by: Optional[str] = Field(default=UNSET, alias="updatedBy")
    """The email of the user who last updated the dataset."""

    last_updated: Optional[str] = Field(default=UNSET, alias="lastUpdated")
    """The timestamp of the last update."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Human-readable name shown in the DoiT console and in report results instead of ``name``. Absent when the dataset
    is displayed by its ``name``. Does not affect ingest, which always uses ``name`` as the provider."""

    logo_name: Optional[str] = Field(default=UNSET, alias="logoName")
    """The preset logo shown next to the dataset in the DoiT console. Absent when the dataset has no preset logo."""


class DatahubV1DatasetsResponse1Dict(TypedDict):
    name: NotRequired[str]
    description: NotRequired[str]
    records: NotRequired[int | None]
    updated_by: NotRequired[str]
    last_updated: NotRequired[str]
    display_name: NotRequired[str]
    logo_name: NotRequired[str]
