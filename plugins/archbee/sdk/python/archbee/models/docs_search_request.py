from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.data_text_format import DataTextFormatOrStr
from .enums.type_archbee_public_documents_api import TypeArchbeePublicDocumentsApiOrStr


class DocsSearchRequest(SdkBaseModel):
    query: str
    """Filter text, question or document title"""

    search_only_title: Optional[bool] = Field(default=UNSET, alias="searchOnlyTitle")
    """OPTIONAL. Search only by title"""

    persist_search: Optional[bool] = Field(default=UNSET, alias="persistSearch")
    """OPTIONAL. Wether to keep a SearchSession in our database and return its id."""

    search_session_id: Optional[str] = Field(default=UNSET, alias="searchSessionId")
    """OPTIONAL. id for the SearchSession object to update. More useful for AI chat."""

    doc_id: Optional[str] = Field(default=UNSET, alias="docId")
    """OPTIONAL. Return only one document with this id, if there is one"""

    data_text_format: Optional[DataTextFormatOrStr] = Field(default=UNSET, alias="dataTextFormat")
    """OPTIONAL. Return documents with dataText in this format"""

    parent_doc_id: Optional[str] = Field(default=UNSET, alias="parentDocId")
    """OPTIONAL. Return only child documents of the doc with this id, if there are any. Can be "null" for retrieving the
    root docs."""

    type_: Optional[TypeArchbeePublicDocumentsApiOrStr] = Field(default=UNSET, alias="type")
    """OPTIONAL. which type of search to use; default is word-based"""


class DocsSearchRequestDict(TypedDict):
    query: str
    search_only_title: NotRequired[bool]
    persist_search: NotRequired[bool]
    search_session_id: NotRequired[str]
    doc_id: NotRequired[str]
    data_text_format: NotRequired[DataTextFormatOrStr]
    parent_doc_id: NotRequired[str]
    type_: NotRequired[TypeArchbeePublicDocumentsApiOrStr]
