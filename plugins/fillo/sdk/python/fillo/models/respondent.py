from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel


class Respondent(SdkBaseModel):
    id: str
    external_id: str = Field(alias="externalId")
    email: OptionalNullable[str] = UNSET
    name: OptionalNullable[str] = UNSET
    traits: OptionalNullable[Any] = UNSET
    verified: bool
    created_at: RFC3339DateTime = Field(alias="createdAt")
    last_seen_at: RFC3339DateTime = Field(alias="lastSeenAt")


class RespondentDict(TypedDict):
    id: str
    external_id: str
    email: NotRequired[str | None]
    name: NotRequired[str | None]
    traits: NotRequired[Any | None]
    verified: bool
    created_at: RFC3339DateTime
    last_seen_at: RFC3339DateTime
