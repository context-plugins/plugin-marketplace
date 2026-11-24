from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .invalid_bid_output import InvalidBidOutput, InvalidBidOutputDict


class UploadBidsInvalidBidResponseError(SdkBaseModel):
    error: str
    """description of the error"""

    bids_validation: list[InvalidBidOutput] = Field(alias="bidsValidation")


class UploadBidsInvalidBidResponseErrorDict(TypedDict):
    error: str
    bids_validation: list[InvalidBidOutputDict]
