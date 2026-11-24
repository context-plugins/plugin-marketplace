from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .click_codeqr_io_track_api import ClickCodeqrIoTrackApi, ClickCodeqrIoTrackApiDict
from .customer_codeqr_io_track_api import CustomerCodeqrIoTrackApi, CustomerCodeqrIoTrackApiDict


class TrackLeadResponse(SdkBaseModel):
    click: ClickCodeqrIoTrackApi
    customer: CustomerCodeqrIoTrackApi


class TrackLeadResponseDict(TypedDict):
    click: ClickCodeqrIoTrackApiDict
    customer: CustomerCodeqrIoTrackApiDict
