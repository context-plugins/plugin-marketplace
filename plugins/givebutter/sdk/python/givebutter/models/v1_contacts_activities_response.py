from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .contact_activity_resource import ContactActivityResource, ContactActivityResourceDict
from .links import Links, LinksDict
from .meta import Meta, MetaDict


class V1ContactsActivitiesResponse(SdkBaseModel):
    data: list[ContactActivityResource]
    links: Links
    meta: Meta


class V1ContactsActivitiesResponseDict(TypedDict):
    data: list[ContactActivityResourceDict]
    links: LinksDict
    meta: MetaDict
