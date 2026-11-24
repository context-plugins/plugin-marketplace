from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CompanyLookalikesMeta(SdkBaseModel):
    returned: int
    has_more: bool = Field(alias="hasMore")


class CompanyLookalikesMetaDict(TypedDict):
    returned: int
    has_more: bool
