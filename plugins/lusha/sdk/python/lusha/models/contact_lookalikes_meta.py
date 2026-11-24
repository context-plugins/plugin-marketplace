from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ContactLookalikesMeta(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    returned: int
    has_more: bool = Field(alias="hasMore")


class ContactLookalikesMetaDict(TypedDict):
    returned: int
    has_more: bool
