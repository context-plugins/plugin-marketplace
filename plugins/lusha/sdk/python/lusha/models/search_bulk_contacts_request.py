from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .contact_search_bulk import ContactSearchBulk, ContactSearchBulkDict
from .metadata2 import Metadata2, Metadata2Dict


class SearchBulkContactsRequest(SdkBaseModel):
    contacts: list[ContactSearchBulk]
    """This is a required parameter that should contain a list of contact objects. Each contact will be processed based
    on the provided contact details."""

    metadata: Optional[Metadata2] = UNSET
    """Metadata for the search to filter the results"""


class SearchBulkContactsRequestDict(TypedDict):
    contacts: list[ContactSearchBulkDict]
    metadata: NotRequired[Metadata2Dict]
