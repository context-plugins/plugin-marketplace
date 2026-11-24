from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.loa_content_type import LoaContentTypeOrStr


class DescribeConnectionLoaRequest(SdkBaseModel):
    connection_id: str = Field(alias="connectionId")
    """The ID of the connection."""

    provider_name: Optional[str] = Field(default=UNSET, alias="providerName")
    """The name of the APN partner or service provider who establishes connectivity on your behalf. If you specify this
    parameter, the LOA-CFA lists the provider name alongside your company name as the requester of the cross connect."""

    loa_content_type: Optional[LoaContentTypeOrStr] = Field(default=UNSET, alias="loaContentType")
    """The standard media type for the LOA-CFA document. The only supported value is application/pdf."""


class DescribeConnectionLoaRequestDict(TypedDict):
    connection_id: str
    provider_name: NotRequired[str]
    loa_content_type: NotRequired[LoaContentTypeOrStr]
