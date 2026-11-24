from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    empty_response,
    param,
    unwrap,
)
from ..errors.cancel_message_move_task_error import (
    CancelMessageMoveTaskErrorBody,
    cancel_message_move_task_error_mapper,
)
from ..errors.change_message_visibility_batch_error import (
    ChangeMessageVisibilityBatchErrorBody,
    change_message_visibility_batch_error_mapper,
)
from ..errors.change_message_visibility_error import (
    ChangeMessageVisibilityErrorBody,
    change_message_visibility_error_mapper,
)
from ..errors.delete_message_batch_error import DeleteMessageBatchErrorBody, delete_message_batch_error_mapper
from ..errors.delete_message_error import DeleteMessageErrorBody, delete_message_error_mapper
from ..errors.list_message_move_tasks_error import ListMessageMoveTasksErrorBody, list_message_move_tasks_error_mapper
from ..errors.receive_message_error import ReceiveMessageErrorBody, receive_message_error_mapper
from ..errors.send_message_batch_error import SendMessageBatchErrorBody, send_message_batch_error_mapper
from ..errors.send_message_error import SendMessageErrorBody, send_message_error_mapper
from ..errors.start_message_move_task_error import StartMessageMoveTaskErrorBody, start_message_move_task_error_mapper
from ..models.enums.x_amz_target import XAmzTargetOrStr
from ..models.enums.x_amz_target1 import XAmzTarget1OrStr
from ..models.enums.x_amz_target2 import XAmzTarget2OrStr
from ..models.enums.x_amz_target3 import XAmzTarget3OrStr
from ..models.enums.x_amz_target4 import XAmzTarget4OrStr
from ..models.enums.x_amz_target5 import XAmzTarget5OrStr
from ..models.enums.x_amz_target6 import XAmzTarget6OrStr
from ..models.enums.x_amz_target7 import XAmzTarget7OrStr
from ..models.enums.x_amz_target8 import XAmzTarget8OrStr
from ..models.enums.x_amz_target9 import XAmzTarget9OrStr
from ..server.server import Server


class Messages:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = MessagesWithRawResponse(client, server, auth)

    def cancel_message_move_task(
        self, x_amz_target: XAmzTarget2OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Cancels a specified message movement task. A message movement can only be cancelled when the current status
        is RUNNING. Cancelling a message movement task does not revert the messages that have already been moved. It can
        only stop the messages that have not been moved yet. This action is currently limited to supporting message
        redrive from dead-letter queues (DLQs) only. In this context, the source queue is the dead-letter queue (DLQ),
        while the destination queue can be the original source queue (from which the messages were driven to the
        dead-letter-queue), or a custom destination queue. Only one active message movement task is supported per queue
        at any given time.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidAddress; ResourceNotFoundException InvalidSecurity; RequestThrottled UnsupportedOperation
                ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.cancel_message_move_task(x_amz_target, request_options=request_options))

    def change_message_visibility(
        self, x_amz_target: XAmzTarget5OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Changes the visibility timeout of a specified message in a queue to a new value. The default visibility
        timeout for a message is 30 seconds. The minimum is 0 seconds. The maximum is 12 hours. For more information,
        see Visibility Timeout in the Amazon SQS Developer Guide. For example, if the default timeout for a queue is 60
        seconds, 15 seconds have elapsed since you received the message, and you send a ChangeMessageVisibility call
        with VisibilityTimeout set to 10 seconds, the 10 seconds begin to count from the time that you make the
        ChangeMessageVisibility call. Thus, any attempt to change the visibility timeout or to delete that message 10
        seconds after you initially change the visibility timeout (a total of 25 seconds) might result in an error. An
        Amazon SQS message has three basic states: Sent to a queue by a producer. Received from the queue by a consumer.
        Deleted from the queue. A message is considered to be stored after it is sent to a queue by a producer, but not
        yet received from the queue by a consumer (that is, between states 1 and 2). There is no limit to the number of
        stored messages. A message is considered to be in flight after it is received from a queue by a consume

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidAddress; ReceiptHandleIsInvalid InvalidSecurity; RequestThrottled MessageNotInflight;
                QueueDoesNotExist; UnsupportedOperation ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.change_message_visibility(x_amz_target, request_options=request_options))

    def change_message_visibility_batch(
        self, x_amz_target: XAmzTarget6OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Changes the visibility timeout of multiple messages. This is a batch version of ChangeMessageVisibility. The
        result of the action on each message is reported individually in the response. You can send up to 10
        ChangeMessageVisibility requests with each ChangeMessageVisibilityBatch action. Because the batch request can
        result in a combination of successful and unsuccessful actions, you should check for batch errors even when the
        call returns an HTTP status code of 200.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BatchEntryIdsNotDistinct; EmptyBatchRequest; InvalidBatchEntryId; QueueDoesNotExist;
                TooManyEntriesInBatchRequest; UnsupportedOperation InvalidAddress InvalidSecurity; RequestThrottled
                ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.change_message_visibility_batch(x_amz_target, request_options=request_options)
        )

    def delete_message(
        self, x_amz_target: XAmzTargetOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes the specified message from the specified queue. To select the message to delete, use the
        ReceiptHandle of the message (not the MessageId which you receive when you send the message). Amazon SQS can
        delete a message from a queue even if a visibility timeout setting causes the message to be locked by another
        consumer. Amazon SQS automatically deletes messages left in a queue longer than the retention period configured
        for the queue. Each time you receive a message, meaning when a consumer retrieves a message from the queue, it
        comes with a unique ReceiptHandle. If you receive the same message more than once, you will get a different
        ReceiptHandle each time. When you want to delete a message using the DeleteMessage action, you must use the
        ReceiptHandle from the most recent time you received the message. If you use an old ReceiptHandle, the request
        will succeed, but the message might not be deleted. For standard queues, it is possible to receive a message
        even after you delete it. This might happen on rare occasions if one of the servers which stores a copy of the
        message is unavailable when you send the request to delete the message. The copy remains on the server and might
        b

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidAddress; ReceiptHandleIsInvalid InvalidIdFormat; QueueDoesNotExist; UnsupportedOperation
                InvalidSecurity; RequestThrottled ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_message(x_amz_target, request_options=request_options))

    def delete_message_batch(
        self, x_amz_target: XAmzTarget8OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes up to ten messages from the specified queue. This is a batch version of DeleteMessage. The result of
        the action on each message is reported individually in the response. Because the batch request can result in a
        combination of successful and unsuccessful actions, you should check for batch errors even when the call returns
        an HTTP status code of 200.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BatchEntryIdsNotDistinct; EmptyBatchRequest; InvalidBatchEntryId; QueueDoesNotExist;
                TooManyEntriesInBatchRequest; UnsupportedOperation InvalidAddress InvalidSecurity; RequestThrottled
                ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_message_batch(x_amz_target, request_options=request_options))

    def list_message_move_tasks(
        self, x_amz_target: XAmzTarget3OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Gets the most recent message movement tasks (up to 10) under a specific source queue. This action is
        currently limited to supporting message redrive from dead-letter queues (DLQs) only. In this context, the source
        queue is the dead-letter queue (DLQ), while the destination queue can be the original source queue (from which
        the messages were driven to the dead-letter-queue), or a custom destination queue. Only one active message
        movement task is supported per queue at any given time.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidAddress; ResourceNotFoundException InvalidSecurity; RequestThrottled UnsupportedOperation
                ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_message_move_tasks(x_amz_target, request_options=request_options))

    def receive_message(
        self, x_amz_target: XAmzTarget7OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Retrieves one or more messages (up to 10), from the specified queue. Using the WaitTimeSeconds parameter
        enables long-poll support. For more information, see Amazon SQS Long Polling in the Amazon SQS Developer Guide.
        Short poll is the default behavior where a weighted random set of machines is sampled on a ReceiveMessage call.
        Therefore, only the messages on the sampled machines are returned. If the number of messages in the queue is
        small (fewer than 1,000), you most likely get fewer messages than you requested per ReceiveMessage call. If the
        number of messages in the queue is extremely small, you might not receive any messages in a particular
        ReceiveMessage response. If this happens, repeat the request. For each message returned, the response includes
        the following: The message body. An MD5 digest of the message body. For information about MD5, see RFC1321. The
        MessageId you received when you sent the message to the queue. The receipt handle. The message attributes. An
        MD5 digest of the message attributes. The receipt handle is the identifier you must provide when deleting the
        message. For more information, see Queue and Message Identifiers in the Amazon SQS Developer Guide. You

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidAddress InvalidSecurity; KmsOptInRequired; OverLimit; RequestThrottled KmsAccessDenied;
                KmsDisabled; KmsInvalidKeyUsage; KmsInvalidState; KmsNotFound; KmsThrottled; QueueDoesNotExist;
                UnsupportedOperation ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.receive_message(x_amz_target, request_options=request_options))

    def send_message(
        self, x_amz_target: XAmzTarget1OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Delivers a message to the specified queue. A message can include only XML, JSON, and unformatted text. The
        following Unicode characters are allowed. For more information, see the W3C specification for characters. #x9 |
        #xA | #xD | #x20 to #xD7FF | #xE000 to #xFFFD | #x10000 to #x10FFFF If a message contains characters outside the
        allowed set, Amazon SQS rejects the message and returns an InvalidMessageContents error. Ensure that your
        message body includes only valid characters to avoid this exception.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidAddress InvalidMessageContents; KmsAccessDenied; KmsDisabled; KmsInvalidKeyUsage;
                KmsInvalidState; KmsNotFound; KmsThrottled; QueueDoesNotExist; UnsupportedOperation InvalidSecurity;
                KmsOptInRequired; RequestThrottled ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.send_message(x_amz_target, request_options=request_options))

    def send_message_batch(
        self, x_amz_target: XAmzTarget9OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """You can use SendMessageBatch to send up to 10 messages to the specified queue by assigning either identical
        or different values to each message (or by not assigning values at all). This is a batch version of SendMessage.
        For a FIFO queue, multiple messages within a single batch are enqueued in the order they are sent. The result of
        sending each message is reported individually in the response. Because the batch request can result in a
        combination of successful and unsuccessful actions, you should check for batch errors even when the call returns
        an HTTP status code of 200. The maximum allowed individual message size and the maximum total payload size (the
        sum of the individual lengths of all of the batched messages) are both 1 MiB 1,048,576 bytes. A message can
        include only XML, JSON, and unformatted text. The following Unicode characters are allowed. For more
        information, see the W3C specification for characters. #x9 | #xA | #xD | #x20 to #xD7FF | #xE000 to #xFFFD |
        #x10000 to #x10FFFF If a message contains characters outside the allowed set, Amazon SQS rejects the message and
        returns an InvalidMessageContents error. Ensure that your message body includes only valid characters to

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BatchEntryIdsNotDistinct; BatchRequestTooLong; EmptyBatchRequest; InvalidBatchEntryId;
                KmsAccessDenied; KmsDisabled; KmsInvalidKeyUsage; KmsInvalidState; KmsNotFound; KmsThrottled;
                QueueDoesNotExist; TooManyEntriesInBatchRequest; UnsupportedOperation InvalidAddress InvalidSecurity;
                KmsOptInRequired; RequestThrottled ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.send_message_batch(x_amz_target, request_options=request_options))

    def start_message_move_task(
        self, x_amz_target: XAmzTarget4OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Starts an asynchronous task to move messages from a specified source queue to a specified destination queue.
        This action is currently limited to supporting message redrive from queues that are configured as dead-letter
        queues (DLQs) of other Amazon SQS queues only. Non-SQS queue sources of dead-letter queues, such as Lambda or
        Amazon SNS topics, are currently not supported. In dead-letter queues redrive context, the StartMessageMoveTask
        the source queue is the DLQ, while the destination queue can be the original source queue (from which the
        messages were driven to the dead-letter-queue), or a custom destination queue. Only one active message movement
        task is supported per queue at any given time.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidAddress; ResourceNotFoundException InvalidSecurity; RequestThrottled UnsupportedOperation
                ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.start_message_move_task(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> MessagesWithRawResponse:
        return self._with_raw_response


class AsyncMessages:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncMessagesWithRawResponse(client, server, auth)

    async def cancel_message_move_task(
        self, x_amz_target: XAmzTarget2OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Cancels a specified message movement task. A message movement can only be cancelled when the current status
        is RUNNING. Cancelling a message movement task does not revert the messages that have already been moved. It can
        only stop the messages that have not been moved yet. This action is currently limited to supporting message
        redrive from dead-letter queues (DLQs) only. In this context, the source queue is the dead-letter queue (DLQ),
        while the destination queue can be the original source queue (from which the messages were driven to the
        dead-letter-queue), or a custom destination queue. Only one active message movement task is supported per queue
        at any given time.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidAddress; ResourceNotFoundException InvalidSecurity; RequestThrottled UnsupportedOperation
                ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.cancel_message_move_task(x_amz_target, request_options=request_options)
        )

    async def change_message_visibility(
        self, x_amz_target: XAmzTarget5OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Changes the visibility timeout of a specified message in a queue to a new value. The default visibility
        timeout for a message is 30 seconds. The minimum is 0 seconds. The maximum is 12 hours. For more information,
        see Visibility Timeout in the Amazon SQS Developer Guide. For example, if the default timeout for a queue is 60
        seconds, 15 seconds have elapsed since you received the message, and you send a ChangeMessageVisibility call
        with VisibilityTimeout set to 10 seconds, the 10 seconds begin to count from the time that you make the
        ChangeMessageVisibility call. Thus, any attempt to change the visibility timeout or to delete that message 10
        seconds after you initially change the visibility timeout (a total of 25 seconds) might result in an error. An
        Amazon SQS message has three basic states: Sent to a queue by a producer. Received from the queue by a consumer.
        Deleted from the queue. A message is considered to be stored after it is sent to a queue by a producer, but not
        yet received from the queue by a consumer (that is, between states 1 and 2). There is no limit to the number of
        stored messages. A message is considered to be in flight after it is received from a queue by a consume

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidAddress; ReceiptHandleIsInvalid InvalidSecurity; RequestThrottled MessageNotInflight;
                QueueDoesNotExist; UnsupportedOperation ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.change_message_visibility(x_amz_target, request_options=request_options)
        )

    async def change_message_visibility_batch(
        self, x_amz_target: XAmzTarget6OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Changes the visibility timeout of multiple messages. This is a batch version of ChangeMessageVisibility. The
        result of the action on each message is reported individually in the response. You can send up to 10
        ChangeMessageVisibility requests with each ChangeMessageVisibilityBatch action. Because the batch request can
        result in a combination of successful and unsuccessful actions, you should check for batch errors even when the
        call returns an HTTP status code of 200.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BatchEntryIdsNotDistinct; EmptyBatchRequest; InvalidBatchEntryId; QueueDoesNotExist;
                TooManyEntriesInBatchRequest; UnsupportedOperation InvalidAddress InvalidSecurity; RequestThrottled
                ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.change_message_visibility_batch(x_amz_target, request_options=request_options)
        )

    async def delete_message(
        self, x_amz_target: XAmzTargetOrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes the specified message from the specified queue. To select the message to delete, use the
        ReceiptHandle of the message (not the MessageId which you receive when you send the message). Amazon SQS can
        delete a message from a queue even if a visibility timeout setting causes the message to be locked by another
        consumer. Amazon SQS automatically deletes messages left in a queue longer than the retention period configured
        for the queue. Each time you receive a message, meaning when a consumer retrieves a message from the queue, it
        comes with a unique ReceiptHandle. If you receive the same message more than once, you will get a different
        ReceiptHandle each time. When you want to delete a message using the DeleteMessage action, you must use the
        ReceiptHandle from the most recent time you received the message. If you use an old ReceiptHandle, the request
        will succeed, but the message might not be deleted. For standard queues, it is possible to receive a message
        even after you delete it. This might happen on rare occasions if one of the servers which stores a copy of the
        message is unavailable when you send the request to delete the message. The copy remains on the server and might
        b

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidAddress; ReceiptHandleIsInvalid InvalidIdFormat; QueueDoesNotExist; UnsupportedOperation
                InvalidSecurity; RequestThrottled ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete_message(x_amz_target, request_options=request_options))

    async def delete_message_batch(
        self, x_amz_target: XAmzTarget8OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes up to ten messages from the specified queue. This is a batch version of DeleteMessage. The result of
        the action on each message is reported individually in the response. Because the batch request can result in a
        combination of successful and unsuccessful actions, you should check for batch errors even when the call returns
        an HTTP status code of 200.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BatchEntryIdsNotDistinct; EmptyBatchRequest; InvalidBatchEntryId; QueueDoesNotExist;
                TooManyEntriesInBatchRequest; UnsupportedOperation InvalidAddress InvalidSecurity; RequestThrottled
                ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete_message_batch(x_amz_target, request_options=request_options))

    async def list_message_move_tasks(
        self, x_amz_target: XAmzTarget3OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Gets the most recent message movement tasks (up to 10) under a specific source queue. This action is
        currently limited to supporting message redrive from dead-letter queues (DLQs) only. In this context, the source
        queue is the dead-letter queue (DLQ), while the destination queue can be the original source queue (from which
        the messages were driven to the dead-letter-queue), or a custom destination queue. Only one active message
        movement task is supported per queue at any given time.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidAddress; ResourceNotFoundException InvalidSecurity; RequestThrottled UnsupportedOperation
                ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_message_move_tasks(x_amz_target, request_options=request_options)
        )

    async def receive_message(
        self, x_amz_target: XAmzTarget7OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Retrieves one or more messages (up to 10), from the specified queue. Using the WaitTimeSeconds parameter
        enables long-poll support. For more information, see Amazon SQS Long Polling in the Amazon SQS Developer Guide.
        Short poll is the default behavior where a weighted random set of machines is sampled on a ReceiveMessage call.
        Therefore, only the messages on the sampled machines are returned. If the number of messages in the queue is
        small (fewer than 1,000), you most likely get fewer messages than you requested per ReceiveMessage call. If the
        number of messages in the queue is extremely small, you might not receive any messages in a particular
        ReceiveMessage response. If this happens, repeat the request. For each message returned, the response includes
        the following: The message body. An MD5 digest of the message body. For information about MD5, see RFC1321. The
        MessageId you received when you sent the message to the queue. The receipt handle. The message attributes. An
        MD5 digest of the message attributes. The receipt handle is the identifier you must provide when deleting the
        message. For more information, see Queue and Message Identifiers in the Amazon SQS Developer Guide. You

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidAddress InvalidSecurity; KmsOptInRequired; OverLimit; RequestThrottled KmsAccessDenied;
                KmsDisabled; KmsInvalidKeyUsage; KmsInvalidState; KmsNotFound; KmsThrottled; QueueDoesNotExist;
                UnsupportedOperation ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.receive_message(x_amz_target, request_options=request_options))

    async def send_message(
        self, x_amz_target: XAmzTarget1OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Delivers a message to the specified queue. A message can include only XML, JSON, and unformatted text. The
        following Unicode characters are allowed. For more information, see the W3C specification for characters. #x9 |
        #xA | #xD | #x20 to #xD7FF | #xE000 to #xFFFD | #x10000 to #x10FFFF If a message contains characters outside the
        allowed set, Amazon SQS rejects the message and returns an InvalidMessageContents error. Ensure that your
        message body includes only valid characters to avoid this exception.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidAddress InvalidMessageContents; KmsAccessDenied; KmsDisabled; KmsInvalidKeyUsage;
                KmsInvalidState; KmsNotFound; KmsThrottled; QueueDoesNotExist; UnsupportedOperation InvalidSecurity;
                KmsOptInRequired; RequestThrottled ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.send_message(x_amz_target, request_options=request_options))

    async def send_message_batch(
        self, x_amz_target: XAmzTarget9OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """You can use SendMessageBatch to send up to 10 messages to the specified queue by assigning either identical
        or different values to each message (or by not assigning values at all). This is a batch version of SendMessage.
        For a FIFO queue, multiple messages within a single batch are enqueued in the order they are sent. The result of
        sending each message is reported individually in the response. Because the batch request can result in a
        combination of successful and unsuccessful actions, you should check for batch errors even when the call returns
        an HTTP status code of 200. The maximum allowed individual message size and the maximum total payload size (the
        sum of the individual lengths of all of the batched messages) are both 1 MiB 1,048,576 bytes. A message can
        include only XML, JSON, and unformatted text. The following Unicode characters are allowed. For more
        information, see the W3C specification for characters. #x9 | #xA | #xD | #x20 to #xD7FF | #xE000 to #xFFFD |
        #x10000 to #x10FFFF If a message contains characters outside the allowed set, Amazon SQS rejects the message and
        returns an InvalidMessageContents error. Ensure that your message body includes only valid characters to

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BatchEntryIdsNotDistinct; BatchRequestTooLong; EmptyBatchRequest; InvalidBatchEntryId;
                KmsAccessDenied; KmsDisabled; KmsInvalidKeyUsage; KmsInvalidState; KmsNotFound; KmsThrottled;
                QueueDoesNotExist; TooManyEntriesInBatchRequest; UnsupportedOperation InvalidAddress InvalidSecurity;
                KmsOptInRequired; RequestThrottled ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.send_message_batch(x_amz_target, request_options=request_options))

    async def start_message_move_task(
        self, x_amz_target: XAmzTarget4OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Starts an asynchronous task to move messages from a specified source queue to a specified destination queue.
        This action is currently limited to supporting message redrive from queues that are configured as dead-letter
        queues (DLQs) of other Amazon SQS queues only. Non-SQS queue sources of dead-letter queues, such as Lambda or
        Amazon SNS topics, are currently not supported. In dead-letter queues redrive context, the StartMessageMoveTask
        the source queue is the DLQ, while the destination queue can be the original source queue (from which the
        messages were driven to the dead-letter-queue), or a custom destination queue. Only one active message movement
        task is supported per queue at any given time.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidAddress; ResourceNotFoundException InvalidSecurity; RequestThrottled UnsupportedOperation
                ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.start_message_move_task(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncMessagesWithRawResponse:
        return self._with_raw_response


class MessagesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def cancel_message_move_task(
        self, x_amz_target: XAmzTarget2OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, CancelMessageMoveTaskErrorBody]:
        """Cancels a specified message movement task. A message movement can only be cancelled when the current status
        is RUNNING. Cancelling a message movement task does not revert the messages that have already been moved. It can
        only stop the messages that have not been moved yet. This action is currently limited to supporting message
        redrive from dead-letter queues (DLQs) only. In this context, the source queue is the dead-letter queue (DLQ),
        while the destination queue can be the original source queue (from which the messages were driven to the
        dead-letter-queue), or a custom destination queue. Only one active message movement task is supported per queue
        at any given time.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CancelMessageMoveTask"),
            headers=[param[XAmzTarget2OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=cancel_message_move_task_error_mapper,
            request_options=request_options,
        )

    def change_message_visibility(
        self, x_amz_target: XAmzTarget5OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ChangeMessageVisibilityErrorBody]:
        """Changes the visibility timeout of a specified message in a queue to a new value. The default visibility
        timeout for a message is 30 seconds. The minimum is 0 seconds. The maximum is 12 hours. For more information,
        see Visibility Timeout in the Amazon SQS Developer Guide. For example, if the default timeout for a queue is 60
        seconds, 15 seconds have elapsed since you received the message, and you send a ChangeMessageVisibility call
        with VisibilityTimeout set to 10 seconds, the 10 seconds begin to count from the time that you make the
        ChangeMessageVisibility call. Thus, any attempt to change the visibility timeout or to delete that message 10
        seconds after you initially change the visibility timeout (a total of 25 seconds) might result in an error. An
        Amazon SQS message has three basic states: Sent to a queue by a producer. Received from the queue by a consumer.
        Deleted from the queue. A message is considered to be stored after it is sent to a queue by a producer, but not
        yet received from the queue by a consumer (that is, between states 1 and 2). There is no limit to the number of
        stored messages. A message is considered to be in flight after it is received from a queue by a consume

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ChangeMessageVisibility"),
            headers=[param[XAmzTarget5OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=change_message_visibility_error_mapper,
            request_options=request_options,
        )

    def change_message_visibility_batch(
        self, x_amz_target: XAmzTarget6OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ChangeMessageVisibilityBatchErrorBody]:
        """Changes the visibility timeout of multiple messages. This is a batch version of ChangeMessageVisibility. The
        result of the action on each message is reported individually in the response. You can send up to 10
        ChangeMessageVisibility requests with each ChangeMessageVisibilityBatch action. Because the batch request can
        result in a combination of successful and unsuccessful actions, you should check for batch errors even when the
        call returns an HTTP status code of 200.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ChangeMessageVisibilityBatch"),
            headers=[param[XAmzTarget6OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=change_message_visibility_batch_error_mapper,
            request_options=request_options,
        )

    def delete_message(
        self, x_amz_target: XAmzTargetOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteMessageErrorBody]:
        """Deletes the specified message from the specified queue. To select the message to delete, use the
        ReceiptHandle of the message (not the MessageId which you receive when you send the message). Amazon SQS can
        delete a message from a queue even if a visibility timeout setting causes the message to be locked by another
        consumer. Amazon SQS automatically deletes messages left in a queue longer than the retention period configured
        for the queue. Each time you receive a message, meaning when a consumer retrieves a message from the queue, it
        comes with a unique ReceiptHandle. If you receive the same message more than once, you will get a different
        ReceiptHandle each time. When you want to delete a message using the DeleteMessage action, you must use the
        ReceiptHandle from the most recent time you received the message. If you use an old ReceiptHandle, the request
        will succeed, but the message might not be deleted. For standard queues, it is possible to receive a message
        even after you delete it. This might happen on rare occasions if one of the servers which stores a copy of the
        message is unavailable when you send the request to delete the message. The copy remains on the server and might
        b

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteMessage"),
            headers=[param[XAmzTargetOrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_message_error_mapper,
            request_options=request_options,
        )

    def delete_message_batch(
        self, x_amz_target: XAmzTarget8OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteMessageBatchErrorBody]:
        """Deletes up to ten messages from the specified queue. This is a batch version of DeleteMessage. The result of
        the action on each message is reported individually in the response. Because the batch request can result in a
        combination of successful and unsuccessful actions, you should check for batch errors even when the call returns
        an HTTP status code of 200.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteMessageBatch"),
            headers=[param[XAmzTarget8OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_message_batch_error_mapper,
            request_options=request_options,
        )

    def list_message_move_tasks(
        self, x_amz_target: XAmzTarget3OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListMessageMoveTasksErrorBody]:
        """Gets the most recent message movement tasks (up to 10) under a specific source queue. This action is
        currently limited to supporting message redrive from dead-letter queues (DLQs) only. In this context, the source
        queue is the dead-letter queue (DLQ), while the destination queue can be the original source queue (from which
        the messages were driven to the dead-letter-queue), or a custom destination queue. Only one active message
        movement task is supported per queue at any given time.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListMessageMoveTasks"),
            headers=[param[XAmzTarget3OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_message_move_tasks_error_mapper,
            request_options=request_options,
        )

    def receive_message(
        self, x_amz_target: XAmzTarget7OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ReceiveMessageErrorBody]:
        """Retrieves one or more messages (up to 10), from the specified queue. Using the WaitTimeSeconds parameter
        enables long-poll support. For more information, see Amazon SQS Long Polling in the Amazon SQS Developer Guide.
        Short poll is the default behavior where a weighted random set of machines is sampled on a ReceiveMessage call.
        Therefore, only the messages on the sampled machines are returned. If the number of messages in the queue is
        small (fewer than 1,000), you most likely get fewer messages than you requested per ReceiveMessage call. If the
        number of messages in the queue is extremely small, you might not receive any messages in a particular
        ReceiveMessage response. If this happens, repeat the request. For each message returned, the response includes
        the following: The message body. An MD5 digest of the message body. For information about MD5, see RFC1321. The
        MessageId you received when you sent the message to the queue. The receipt handle. The message attributes. An
        MD5 digest of the message attributes. The receipt handle is the identifier you must provide when deleting the
        message. For more information, see Queue and Message Identifiers in the Amazon SQS Developer Guide. You

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ReceiveMessage"),
            headers=[param[XAmzTarget7OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=receive_message_error_mapper,
            request_options=request_options,
        )

    def send_message(
        self, x_amz_target: XAmzTarget1OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, SendMessageErrorBody]:
        """Delivers a message to the specified queue. A message can include only XML, JSON, and unformatted text. The
        following Unicode characters are allowed. For more information, see the W3C specification for characters. #x9 |
        #xA | #xD | #x20 to #xD7FF | #xE000 to #xFFFD | #x10000 to #x10FFFF If a message contains characters outside the
        allowed set, Amazon SQS rejects the message and returns an InvalidMessageContents error. Ensure that your
        message body includes only valid characters to avoid this exception.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#SendMessage"),
            headers=[param[XAmzTarget1OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=send_message_error_mapper,
            request_options=request_options,
        )

    def send_message_batch(
        self, x_amz_target: XAmzTarget9OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, SendMessageBatchErrorBody]:
        """You can use SendMessageBatch to send up to 10 messages to the specified queue by assigning either identical
        or different values to each message (or by not assigning values at all). This is a batch version of SendMessage.
        For a FIFO queue, multiple messages within a single batch are enqueued in the order they are sent. The result of
        sending each message is reported individually in the response. Because the batch request can result in a
        combination of successful and unsuccessful actions, you should check for batch errors even when the call returns
        an HTTP status code of 200. The maximum allowed individual message size and the maximum total payload size (the
        sum of the individual lengths of all of the batched messages) are both 1 MiB 1,048,576 bytes. A message can
        include only XML, JSON, and unformatted text. The following Unicode characters are allowed. For more
        information, see the W3C specification for characters. #x9 | #xA | #xD | #x20 to #xD7FF | #xE000 to #xFFFD |
        #x10000 to #x10FFFF If a message contains characters outside the allowed set, Amazon SQS rejects the message and
        returns an InvalidMessageContents error. Ensure that your message body includes only valid characters to

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#SendMessageBatch"),
            headers=[param[XAmzTarget9OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=send_message_batch_error_mapper,
            request_options=request_options,
        )

    def start_message_move_task(
        self, x_amz_target: XAmzTarget4OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, StartMessageMoveTaskErrorBody]:
        """Starts an asynchronous task to move messages from a specified source queue to a specified destination queue.
        This action is currently limited to supporting message redrive from queues that are configured as dead-letter
        queues (DLQs) of other Amazon SQS queues only. Non-SQS queue sources of dead-letter queues, such as Lambda or
        Amazon SNS topics, are currently not supported. In dead-letter queues redrive context, the StartMessageMoveTask
        the source queue is the DLQ, while the destination queue can be the original source queue (from which the
        messages were driven to the dead-letter-queue), or a custom destination queue. Only one active message movement
        task is supported per queue at any given time.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartMessageMoveTask"),
            headers=[param[XAmzTarget4OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=start_message_move_task_error_mapper,
            request_options=request_options,
        )


class AsyncMessagesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def cancel_message_move_task(
        self, x_amz_target: XAmzTarget2OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, CancelMessageMoveTaskErrorBody]:
        """Cancels a specified message movement task. A message movement can only be cancelled when the current status
        is RUNNING. Cancelling a message movement task does not revert the messages that have already been moved. It can
        only stop the messages that have not been moved yet. This action is currently limited to supporting message
        redrive from dead-letter queues (DLQs) only. In this context, the source queue is the dead-letter queue (DLQ),
        while the destination queue can be the original source queue (from which the messages were driven to the
        dead-letter-queue), or a custom destination queue. Only one active message movement task is supported per queue
        at any given time.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CancelMessageMoveTask"),
            headers=[param[XAmzTarget2OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=cancel_message_move_task_error_mapper,
            request_options=request_options,
        )

    async def change_message_visibility(
        self, x_amz_target: XAmzTarget5OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ChangeMessageVisibilityErrorBody]:
        """Changes the visibility timeout of a specified message in a queue to a new value. The default visibility
        timeout for a message is 30 seconds. The minimum is 0 seconds. The maximum is 12 hours. For more information,
        see Visibility Timeout in the Amazon SQS Developer Guide. For example, if the default timeout for a queue is 60
        seconds, 15 seconds have elapsed since you received the message, and you send a ChangeMessageVisibility call
        with VisibilityTimeout set to 10 seconds, the 10 seconds begin to count from the time that you make the
        ChangeMessageVisibility call. Thus, any attempt to change the visibility timeout or to delete that message 10
        seconds after you initially change the visibility timeout (a total of 25 seconds) might result in an error. An
        Amazon SQS message has three basic states: Sent to a queue by a producer. Received from the queue by a consumer.
        Deleted from the queue. A message is considered to be stored after it is sent to a queue by a producer, but not
        yet received from the queue by a consumer (that is, between states 1 and 2). There is no limit to the number of
        stored messages. A message is considered to be in flight after it is received from a queue by a consume

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ChangeMessageVisibility"),
            headers=[param[XAmzTarget5OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=change_message_visibility_error_mapper,
            request_options=request_options,
        )

    async def change_message_visibility_batch(
        self, x_amz_target: XAmzTarget6OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ChangeMessageVisibilityBatchErrorBody]:
        """Changes the visibility timeout of multiple messages. This is a batch version of ChangeMessageVisibility. The
        result of the action on each message is reported individually in the response. You can send up to 10
        ChangeMessageVisibility requests with each ChangeMessageVisibilityBatch action. Because the batch request can
        result in a combination of successful and unsuccessful actions, you should check for batch errors even when the
        call returns an HTTP status code of 200.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ChangeMessageVisibilityBatch"),
            headers=[param[XAmzTarget6OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=change_message_visibility_batch_error_mapper,
            request_options=request_options,
        )

    async def delete_message(
        self, x_amz_target: XAmzTargetOrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteMessageErrorBody]:
        """Deletes the specified message from the specified queue. To select the message to delete, use the
        ReceiptHandle of the message (not the MessageId which you receive when you send the message). Amazon SQS can
        delete a message from a queue even if a visibility timeout setting causes the message to be locked by another
        consumer. Amazon SQS automatically deletes messages left in a queue longer than the retention period configured
        for the queue. Each time you receive a message, meaning when a consumer retrieves a message from the queue, it
        comes with a unique ReceiptHandle. If you receive the same message more than once, you will get a different
        ReceiptHandle each time. When you want to delete a message using the DeleteMessage action, you must use the
        ReceiptHandle from the most recent time you received the message. If you use an old ReceiptHandle, the request
        will succeed, but the message might not be deleted. For standard queues, it is possible to receive a message
        even after you delete it. This might happen on rare occasions if one of the servers which stores a copy of the
        message is unavailable when you send the request to delete the message. The copy remains on the server and might
        b

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteMessage"),
            headers=[param[XAmzTargetOrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_message_error_mapper,
            request_options=request_options,
        )

    async def delete_message_batch(
        self, x_amz_target: XAmzTarget8OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteMessageBatchErrorBody]:
        """Deletes up to ten messages from the specified queue. This is a batch version of DeleteMessage. The result of
        the action on each message is reported individually in the response. Because the batch request can result in a
        combination of successful and unsuccessful actions, you should check for batch errors even when the call returns
        an HTTP status code of 200.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteMessageBatch"),
            headers=[param[XAmzTarget8OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_message_batch_error_mapper,
            request_options=request_options,
        )

    async def list_message_move_tasks(
        self, x_amz_target: XAmzTarget3OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListMessageMoveTasksErrorBody]:
        """Gets the most recent message movement tasks (up to 10) under a specific source queue. This action is
        currently limited to supporting message redrive from dead-letter queues (DLQs) only. In this context, the source
        queue is the dead-letter queue (DLQ), while the destination queue can be the original source queue (from which
        the messages were driven to the dead-letter-queue), or a custom destination queue. Only one active message
        movement task is supported per queue at any given time.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListMessageMoveTasks"),
            headers=[param[XAmzTarget3OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_message_move_tasks_error_mapper,
            request_options=request_options,
        )

    async def receive_message(
        self, x_amz_target: XAmzTarget7OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ReceiveMessageErrorBody]:
        """Retrieves one or more messages (up to 10), from the specified queue. Using the WaitTimeSeconds parameter
        enables long-poll support. For more information, see Amazon SQS Long Polling in the Amazon SQS Developer Guide.
        Short poll is the default behavior where a weighted random set of machines is sampled on a ReceiveMessage call.
        Therefore, only the messages on the sampled machines are returned. If the number of messages in the queue is
        small (fewer than 1,000), you most likely get fewer messages than you requested per ReceiveMessage call. If the
        number of messages in the queue is extremely small, you might not receive any messages in a particular
        ReceiveMessage response. If this happens, repeat the request. For each message returned, the response includes
        the following: The message body. An MD5 digest of the message body. For information about MD5, see RFC1321. The
        MessageId you received when you sent the message to the queue. The receipt handle. The message attributes. An
        MD5 digest of the message attributes. The receipt handle is the identifier you must provide when deleting the
        message. For more information, see Queue and Message Identifiers in the Amazon SQS Developer Guide. You

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ReceiveMessage"),
            headers=[param[XAmzTarget7OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=receive_message_error_mapper,
            request_options=request_options,
        )

    async def send_message(
        self, x_amz_target: XAmzTarget1OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, SendMessageErrorBody]:
        """Delivers a message to the specified queue. A message can include only XML, JSON, and unformatted text. The
        following Unicode characters are allowed. For more information, see the W3C specification for characters. #x9 |
        #xA | #xD | #x20 to #xD7FF | #xE000 to #xFFFD | #x10000 to #x10FFFF If a message contains characters outside the
        allowed set, Amazon SQS rejects the message and returns an InvalidMessageContents error. Ensure that your
        message body includes only valid characters to avoid this exception.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#SendMessage"),
            headers=[param[XAmzTarget1OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=send_message_error_mapper,
            request_options=request_options,
        )

    async def send_message_batch(
        self, x_amz_target: XAmzTarget9OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, SendMessageBatchErrorBody]:
        """You can use SendMessageBatch to send up to 10 messages to the specified queue by assigning either identical
        or different values to each message (or by not assigning values at all). This is a batch version of SendMessage.
        For a FIFO queue, multiple messages within a single batch are enqueued in the order they are sent. The result of
        sending each message is reported individually in the response. Because the batch request can result in a
        combination of successful and unsuccessful actions, you should check for batch errors even when the call returns
        an HTTP status code of 200. The maximum allowed individual message size and the maximum total payload size (the
        sum of the individual lengths of all of the batched messages) are both 1 MiB 1,048,576 bytes. A message can
        include only XML, JSON, and unformatted text. The following Unicode characters are allowed. For more
        information, see the W3C specification for characters. #x9 | #xA | #xD | #x20 to #xD7FF | #xE000 to #xFFFD |
        #x10000 to #x10FFFF If a message contains characters outside the allowed set, Amazon SQS rejects the message and
        returns an InvalidMessageContents error. Ensure that your message body includes only valid characters to

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#SendMessageBatch"),
            headers=[param[XAmzTarget9OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=send_message_batch_error_mapper,
            request_options=request_options,
        )

    async def start_message_move_task(
        self, x_amz_target: XAmzTarget4OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, StartMessageMoveTaskErrorBody]:
        """Starts an asynchronous task to move messages from a specified source queue to a specified destination queue.
        This action is currently limited to supporting message redrive from queues that are configured as dead-letter
        queues (DLQs) of other Amazon SQS queues only. Non-SQS queue sources of dead-letter queues, such as Lambda or
        Amazon SNS topics, are currently not supported. In dead-letter queues redrive context, the StartMessageMoveTask
        the source queue is the DLQ, while the destination queue can be the original source queue (from which the
        messages were driven to the dead-letter-queue), or a custom destination queue. Only one active message movement
        task is supported per queue at any given time.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartMessageMoveTask"),
            headers=[param[XAmzTarget4OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=start_message_move_task_error_mapper,
            request_options=request_options,
        )
