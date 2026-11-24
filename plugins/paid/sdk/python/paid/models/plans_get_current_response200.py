from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .plans_current_get_responses_content_application_json_schema_plan import (
    PlansCurrentGetResponsesContentApplicationJsonSchemaPlan,
    PlansCurrentGetResponsesContentApplicationJsonSchemaPlanDict,
)
from .plans_current_get_responses_content_application_json_schema_subscription import (
    PlansCurrentGetResponsesContentApplicationJsonSchemaSubscription,
    PlansCurrentGetResponsesContentApplicationJsonSchemaSubscriptionDict,
)


class PlansGetCurrentResponse200(SdkBaseModel):
    plan: PlansCurrentGetResponsesContentApplicationJsonSchemaPlan | None
    """The plan details, or null if the customer has no active plan"""

    subscription: PlansCurrentGetResponsesContentApplicationJsonSchemaSubscription | None
    """The subscription details, or null if the customer has no active plan"""


class PlansGetCurrentResponse200Dict(TypedDict):
    plan: PlansCurrentGetResponsesContentApplicationJsonSchemaPlanDict | None
    subscription: PlansCurrentGetResponsesContentApplicationJsonSchemaSubscriptionDict | None
