from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class MemberInfoOrganization2(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    id: UUID


class MemberInfoOrganization2Dict(TypedDict):
    id: UUID
