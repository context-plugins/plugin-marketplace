from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class EventResource(SdkBaseModel):
    title: str
    type_: str = Field(alias="type")
    location_name: str
    address_formatted: str
    google_place_id: str
    start_at: str
    end_at: str
    timezone: str
    details: str
    private: str
    tickets_required: str
    livestream: str
    livestream_start_at: str
    livestream_end_at: str
    created_at: str
    updated_at: str


class EventResourceDict(TypedDict):
    title: str
    type_: str
    location_name: str
    address_formatted: str
    google_place_id: str
    start_at: str
    end_at: str
    timezone: str
    details: str
    private: str
    tickets_required: str
    livestream: str
    livestream_start_at: str
    livestream_end_at: str
    created_at: str
    updated_at: str
