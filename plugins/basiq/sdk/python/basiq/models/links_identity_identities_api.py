from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class LinksIdentityIdentitiesApi(SdkBaseModel):
    self: str
    """Self link to the requested identity"""

    job: str
    """Link to the job associated with this identity"""


class LinksIdentityIdentitiesApiDict(TypedDict):
    self: str
    job: str
