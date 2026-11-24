from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class PaginationMeta(SdkBaseModel):
    """Pagination metadata for cost traces"""

    limit: int
    """The requested limit"""

    offset: int
    """The requested offset"""

    count: int
    """Number of items returned in this response"""

    has_more: bool = Field(alias="hasMore")
    """Whether there are more results available"""

    start_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="startTime")
    """The startTime filter that was applied (if any)"""

    end_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="endTime")
    """The endTime filter that was applied (if any)"""

    external_customer_id: Optional[str] = Field(default=UNSET, alias="externalCustomerId")
    """The externalCustomerId filter that was applied (if any)"""

    external_product_id: Optional[str] = Field(default=UNSET, alias="externalProductId")
    """The externalProductId filter that was applied (if any)"""

    external_agent_id: Optional[str] = Field(default=UNSET, alias="externalAgentId")
    """DEPRECATED: Use externalProductId instead. The externalAgentId filter that was applied (if any)"""

    metadata: Optional[str] = UNSET
    """The metadata filter that was applied (if any)"""


class PaginationMetaDict(TypedDict):
    limit: int
    offset: int
    count: int
    has_more: bool
    start_time: NotRequired[RFC3339DateTime]
    end_time: NotRequired[RFC3339DateTime]
    external_customer_id: NotRequired[str]
    external_product_id: NotRequired[str]
    external_agent_id: NotRequired[str]
    metadata: NotRequired[str]
