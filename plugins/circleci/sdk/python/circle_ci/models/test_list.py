from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .test_metadata import TestMetadata, TestMetadataDict


class TestList(SdkBaseModel):
    items: Optional[list[TestMetadata]] = UNSET
    """List of test metadata"""

    next_page_token: Optional[str] = UNSET
    """Token for retrieving the next page"""


class TestListDict(TypedDict):
    items: NotRequired[list[TestMetadataDict]]
    next_page_token: NotRequired[str]
