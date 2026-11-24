from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class WebhooksWebhookNamePatchParametersWebhookName(str, Enum):
    BILLING_INVOICE_CREATED = "billing-invoice-created"
    BILLING_INVOICE_PAID = "billing-invoice-paid"
    BILLING_INVOICE_POSTED = "billing-invoice-posted"
    BILLING_CHECKOUT_CREATED = "billing-checkout-created"
    BILLING_CHECKOUT_COMPLETED = "billing-checkout-completed"
    BILLING_CHECKOUT_EXPIRED = "billing-checkout-expired"
    BILLING_PAYMENT_SUCCEEDED = "billing-payment-succeeded"
    BILLING_PAYMENT_FAILED = "billing-payment-failed"
    BILLING_CREDITS_DEPLETED = "billing-credits-depleted"
    BILLING_OVERAGE_INCURRED = "billing-overage-incurred"

    __str__ = str.__str__


WebhooksWebhookNamePatchParametersWebhookNameOrStr: TypeAlias = Annotated[
    WebhooksWebhookNamePatchParametersWebhookName | str,
    open_enum_validator(WebhooksWebhookNamePatchParametersWebhookName),
]
