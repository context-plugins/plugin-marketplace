from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .contact_resource import ContactResource, ContactResourceDict
from .links import Links, LinksDict
from .meta import Meta, MetaDict


class V1HouseholdsContactsResponse(SdkBaseModel):
    data: list[ContactResource]
    links: Links
    meta: Meta


class V1HouseholdsContactsResponseDict(TypedDict):
    data: list[ContactResourceDict]
    links: LinksDict
    meta: MetaDict
