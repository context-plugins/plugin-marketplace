from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .document_data import DocumentData, DocumentDataDict


class LeadUpload(SdkBaseModel):
    """Contains the information about an additional document to upload"""

    document_data_list: list[DocumentData] = Field(alias="documentDataList")
    """A list of Base64 encoded documents"""


class LeadUploadDict(TypedDict):
    document_data_list: list[DocumentDataDict]
