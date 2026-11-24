from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .links import Links, LinksDict
from .meta import Meta, MetaDict
from .recurring_plan_resource import RecurringPlanResource, RecurringPlanResourceDict


class V1PlansResponse(SdkBaseModel):
    data: list[RecurringPlanResource]
    links: Links
    meta: Meta


class V1PlansResponseDict(TypedDict):
    data: list[RecurringPlanResourceDict]
    links: LinksDict
    meta: MetaDict
