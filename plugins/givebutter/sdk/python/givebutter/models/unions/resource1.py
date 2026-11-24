from __future__ import annotations

from typing import TypeAlias

from ..message_resource import MessageResource, MessageResourceDict
from ..recurring_plan_resource import RecurringPlanResource, RecurringPlanResourceDict
from ..resource import Resource, ResourceDict
from ..ticket_resource import TicketResource, TicketResourceDict
from .transaction_resource2 import TransactionResource2, TransactionResource2Dict

Resource1: TypeAlias = TransactionResource2 | Resource | RecurringPlanResource | TicketResource | MessageResource

Resource1Dict: TypeAlias = (
    TransactionResource2Dict | ResourceDict | RecurringPlanResourceDict | TicketResourceDict | MessageResourceDict
)
