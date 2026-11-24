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
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.delete_slot_type_version_error import (
    DeleteSlotTypeVersionErrorBody,
    delete_slot_type_version_error_mapper,
)
from ..errors.get_intents_error import GetIntentsErrorBody, get_intents_error_mapper
from ..errors.get_slot_types_error import GetSlotTypesErrorBody, get_slot_types_error_mapper
from ..errors.get_utterances_view_error import GetUtterancesViewErrorBody, get_utterances_view_error_mapper
from ..errors.post_content_error import PostContentErrorBody, post_content_error_mapper
from ..errors.post_text_error import PostTextErrorBody, post_text_error_mapper
from ..models.delete_slot_type_version_request import DeleteSlotTypeVersionRequest, DeleteSlotTypeVersionRequestDict
from ..models.get_intents_response import GetIntentsResponse
from ..models.get_slot_types_response import GetSlotTypesResponse
from ..models.get_utterances_view_response import GetUtterancesViewResponse
from ..models.post_content_request import PostContentRequest, PostContentRequestDict
from ..models.post_content_response import PostContentResponse
from ..models.post_text_request import PostTextRequest, PostTextRequestDict
from ..models.post_text_response import PostTextResponse
from ..server.server import Server


class Operations:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = OperationsWithRawResponse(client, server, auth)

    def delete_slot_type_version(
        self,
        name: str,
        version: str,
        *,
        body: DeleteSlotTypeVersionRequest | DeleteSlotTypeVersionRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> str:
        """Deletes a specific version of a slot type. To delete all versions of a slot type, use the DeleteSlotType
        operation. This operation requires permissions for the lex:DeleteSlotTypeVersion action.

        Args:
            name: Value sent with the request.
            version: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException; ResourceInUseException ConflictException InternalFailureException
                LimitExceededException NotFoundException ``error`` is ``BadRequestException | NotFoundException |
                ConflictException | LimitExceededException | InternalFailureException | RawError``."""
        return unwrap(
            self._with_raw_response.delete_slot_type_version(name, version, body=body, request_options=request_options)
        )

    def get_intents(self, *, request_options: RequestOptionsOrDict | None = None) -> GetIntentsResponse:
        """Returns intent information as follows: If you specify the nameContains field, returns the $LATEST version of
        all intents that contain the specified string. If you don't specify the nameContains field, returns information
        about the $LATEST version of all intents. The operation requires permission for the lex:GetIntents action.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException NotFoundException ``error`` is
                ``BadRequestException | NotFoundException | LimitExceededException | InternalFailureException |
                RawError``."""
        return unwrap(self._with_raw_response.get_intents(request_options=request_options))

    def get_slot_types(self, *, request_options: RequestOptionsOrDict | None = None) -> GetSlotTypesResponse:
        """Returns slot type information as follows: If you specify the nameContains field, returns the $LATEST version
        of all slot types that contain the specified string. If you don't specify the nameContains field, returns
        information about the $LATEST version of all slot types. The operation requires permission for the
        lex:GetSlotTypes action.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException NotFoundException ``error`` is
                ``BadRequestException | NotFoundException | LimitExceededException | InternalFailureException |
                RawError``."""
        return unwrap(self._with_raw_response.get_slot_types(request_options=request_options))

    def get_utterances_view(
        self, bot_name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> GetUtterancesViewResponse:
        """Use the GetUtterancesView operation to get information about the utterances that your users have made to your
        bot. You can use this list to tune the utterances that your bot responds to. For example, say that you have
        created a bot to order flowers. After your users have used your bot for a while, use the GetUtterancesView
        operation to see the requests that they have made and whether they have been successful. You might find that the
        utterance "I want flowers" is not being recognized. You could add this utterance to the OrderFlowers intent so
        that your bot recognizes that utterance. After you publish a new version of a bot, you can get information about
        the old version and the new so that you can compare the performance across the two versions. Utterance
        statistics are generated once a day. Data is available for the last 15 days. You can request information for up
        to 5 versions of your bot in each request. Amazon Lex returns the most frequent utterances received by the bot
        in the last 15 days. The response contains information about a maximum of 100 utterances for each version. If
        you set childDirected field to true when you created your bot, if you are using slot obfuscation with

        Args:
            bot_name: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException ``error`` is
                ``BadRequestException | LimitExceededException | InternalFailureException | RawError``."""
        return unwrap(self._with_raw_response.get_utterances_view(bot_name, request_options=request_options))

    def post_content(
        self,
        bot_name: str,
        bot_alias: str,
        user_id: str,
        *,
        body: PostContentRequest | PostContentRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PostContentResponse:
        """Sends user input (text or speech) to Amazon Lex. Clients use this API to send text and audio requests to
        Amazon Lex at runtime. Amazon Lex interprets the user input using the machine learning model that it built for
        the bot. The PostContent operation supports audio input at 8kHz and 16kHz. You can use 8kHz audio to achieve
        higher speech recognition accuracy in telephone audio applications. In response, Amazon Lex returns the next
        message to convey to the user. Consider the following example messages: For a user input "I would like a pizza,"
        Amazon Lex might return a response with a message eliciting slot data (for example, PizzaSize): "What size pizza
        would you like?". After the user provides all of the pizza order information, Amazon Lex might return a response
        with a message to get user confirmation: "Order the pizza?". After the user replies "Yes" to the confirmation
        prompt, Amazon Lex might return a conclusion statement: "Thank you, your cheese pizza has been ordered.". Not
        all Amazon Lex messages require a response from the user. For example, conclusion statements do not require a
        response. Some messages require only a yes or no response. In addition to the message, Amazon Lex

        Args:
            bot_name: Value sent with the request.
            bot_alias: Value sent with the request.
            user_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadGatewayException BadRequestException ConflictException DependencyFailedException
                InternalFailureException LimitExceededException LoopDetectedException NotAcceptableException
                NotFoundException RequestTimeoutException UnsupportedMediaTypeException ``error`` is
                ``BadRequestException | NotFoundException | NotAcceptableException | RequestTimeoutException |
                ConflictException | UnsupportedMediaTypeException | RuntimeLexDependencyFailedException |
                LimitExceededException | InternalFailureException | RuntimeLexBadGatewayException |
                LoopDetectedException | RawError``."""
        return unwrap(
            self._with_raw_response.post_content(
                bot_name, bot_alias, user_id, body=body, request_options=request_options
            ),
        )

    def post_text(
        self,
        bot_name: str,
        bot_alias: str,
        user_id: str,
        *,
        body: PostTextRequest | PostTextRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PostTextResponse:
        """Sends user input to Amazon Lex. Client applications can use this API to send requests to Amazon Lex at
        runtime. Amazon Lex then interprets the user input using the machine learning model it built for the bot. In
        response, Amazon Lex returns the next message to convey to the user an optional responseCard to display.
        Consider the following example messages: For a user input "I would like a pizza", Amazon Lex might return a
        response with a message eliciting slot data (for example, PizzaSize): "What size pizza would you like?" After
        the user provides all of the pizza order information, Amazon Lex might return a response with a message to
        obtain user confirmation "Proceed with the pizza order?". After the user replies to a confirmation prompt with a
        "yes", Amazon Lex might return a conclusion statement: "Thank you, your cheese pizza has been ordered.". Not all
        Amazon Lex messages require a user response. For example, a conclusion statement does not require a response.
        Some messages require only a "yes" or "no" user response. In addition to the message, Amazon Lex provides
        additional context about the message in the response that you might use to enhance client behavior, for example,
        to

        Args:
            bot_name: Value sent with the request.
            bot_alias: Value sent with the request.
            user_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadGatewayException BadRequestException ConflictException DependencyFailedException
                InternalFailureException LimitExceededException LoopDetectedException NotFoundException ``error`` is
                ``BadRequestException | NotFoundException | ConflictException | RuntimeLexDependencyFailedException |
                LimitExceededException | InternalFailureException | RuntimeLexBadGatewayException |
                LoopDetectedException | RawError``."""
        return unwrap(
            self._with_raw_response.post_text(bot_name, bot_alias, user_id, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> OperationsWithRawResponse:
        return self._with_raw_response


class AsyncOperations:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncOperationsWithRawResponse(client, server, auth)

    async def delete_slot_type_version(
        self,
        name: str,
        version: str,
        *,
        body: DeleteSlotTypeVersionRequest | DeleteSlotTypeVersionRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> str:
        """Deletes a specific version of a slot type. To delete all versions of a slot type, use the DeleteSlotType
        operation. This operation requires permissions for the lex:DeleteSlotTypeVersion action.

        Args:
            name: Value sent with the request.
            version: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException; ResourceInUseException ConflictException InternalFailureException
                LimitExceededException NotFoundException ``error`` is ``BadRequestException | NotFoundException |
                ConflictException | LimitExceededException | InternalFailureException | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_slot_type_version(
                name, version, body=body, request_options=request_options
            ),
        )

    async def get_intents(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> GetIntentsResponse:
        """Returns intent information as follows: If you specify the nameContains field, returns the $LATEST version of
        all intents that contain the specified string. If you don't specify the nameContains field, returns information
        about the $LATEST version of all intents. The operation requires permission for the lex:GetIntents action.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException NotFoundException ``error`` is
                ``BadRequestException | NotFoundException | LimitExceededException | InternalFailureException |
                RawError``."""
        return unwrap(await self._with_raw_response.get_intents(request_options=request_options))

    async def get_slot_types(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> GetSlotTypesResponse:
        """Returns slot type information as follows: If you specify the nameContains field, returns the $LATEST version
        of all slot types that contain the specified string. If you don't specify the nameContains field, returns
        information about the $LATEST version of all slot types. The operation requires permission for the
        lex:GetSlotTypes action.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException NotFoundException ``error`` is
                ``BadRequestException | NotFoundException | LimitExceededException | InternalFailureException |
                RawError``."""
        return unwrap(await self._with_raw_response.get_slot_types(request_options=request_options))

    async def get_utterances_view(
        self, bot_name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GetUtterancesViewResponse:
        """Use the GetUtterancesView operation to get information about the utterances that your users have made to your
        bot. You can use this list to tune the utterances that your bot responds to. For example, say that you have
        created a bot to order flowers. After your users have used your bot for a while, use the GetUtterancesView
        operation to see the requests that they have made and whether they have been successful. You might find that the
        utterance "I want flowers" is not being recognized. You could add this utterance to the OrderFlowers intent so
        that your bot recognizes that utterance. After you publish a new version of a bot, you can get information about
        the old version and the new so that you can compare the performance across the two versions. Utterance
        statistics are generated once a day. Data is available for the last 15 days. You can request information for up
        to 5 versions of your bot in each request. Amazon Lex returns the most frequent utterances received by the bot
        in the last 15 days. The response contains information about a maximum of 100 utterances for each version. If
        you set childDirected field to true when you created your bot, if you are using slot obfuscation with

        Args:
            bot_name: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException ``error`` is
                ``BadRequestException | LimitExceededException | InternalFailureException | RawError``."""
        return unwrap(await self._with_raw_response.get_utterances_view(bot_name, request_options=request_options))

    async def post_content(
        self,
        bot_name: str,
        bot_alias: str,
        user_id: str,
        *,
        body: PostContentRequest | PostContentRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PostContentResponse:
        """Sends user input (text or speech) to Amazon Lex. Clients use this API to send text and audio requests to
        Amazon Lex at runtime. Amazon Lex interprets the user input using the machine learning model that it built for
        the bot. The PostContent operation supports audio input at 8kHz and 16kHz. You can use 8kHz audio to achieve
        higher speech recognition accuracy in telephone audio applications. In response, Amazon Lex returns the next
        message to convey to the user. Consider the following example messages: For a user input "I would like a pizza,"
        Amazon Lex might return a response with a message eliciting slot data (for example, PizzaSize): "What size pizza
        would you like?". After the user provides all of the pizza order information, Amazon Lex might return a response
        with a message to get user confirmation: "Order the pizza?". After the user replies "Yes" to the confirmation
        prompt, Amazon Lex might return a conclusion statement: "Thank you, your cheese pizza has been ordered.". Not
        all Amazon Lex messages require a response from the user. For example, conclusion statements do not require a
        response. Some messages require only a yes or no response. In addition to the message, Amazon Lex

        Args:
            bot_name: Value sent with the request.
            bot_alias: Value sent with the request.
            user_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadGatewayException BadRequestException ConflictException DependencyFailedException
                InternalFailureException LimitExceededException LoopDetectedException NotAcceptableException
                NotFoundException RequestTimeoutException UnsupportedMediaTypeException ``error`` is
                ``BadRequestException | NotFoundException | NotAcceptableException | RequestTimeoutException |
                ConflictException | UnsupportedMediaTypeException | RuntimeLexDependencyFailedException |
                LimitExceededException | InternalFailureException | RuntimeLexBadGatewayException |
                LoopDetectedException | RawError``."""
        return unwrap(
            await self._with_raw_response.post_content(
                bot_name, bot_alias, user_id, body=body, request_options=request_options
            ),
        )

    async def post_text(
        self,
        bot_name: str,
        bot_alias: str,
        user_id: str,
        *,
        body: PostTextRequest | PostTextRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PostTextResponse:
        """Sends user input to Amazon Lex. Client applications can use this API to send requests to Amazon Lex at
        runtime. Amazon Lex then interprets the user input using the machine learning model it built for the bot. In
        response, Amazon Lex returns the next message to convey to the user an optional responseCard to display.
        Consider the following example messages: For a user input "I would like a pizza", Amazon Lex might return a
        response with a message eliciting slot data (for example, PizzaSize): "What size pizza would you like?" After
        the user provides all of the pizza order information, Amazon Lex might return a response with a message to
        obtain user confirmation "Proceed with the pizza order?". After the user replies to a confirmation prompt with a
        "yes", Amazon Lex might return a conclusion statement: "Thank you, your cheese pizza has been ordered.". Not all
        Amazon Lex messages require a user response. For example, a conclusion statement does not require a response.
        Some messages require only a "yes" or "no" user response. In addition to the message, Amazon Lex provides
        additional context about the message in the response that you might use to enhance client behavior, for example,
        to

        Args:
            bot_name: Value sent with the request.
            bot_alias: Value sent with the request.
            user_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadGatewayException BadRequestException ConflictException DependencyFailedException
                InternalFailureException LimitExceededException LoopDetectedException NotFoundException ``error`` is
                ``BadRequestException | NotFoundException | ConflictException | RuntimeLexDependencyFailedException |
                LimitExceededException | InternalFailureException | RuntimeLexBadGatewayException |
                LoopDetectedException | RawError``."""
        return unwrap(
            await self._with_raw_response.post_text(
                bot_name, bot_alias, user_id, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncOperationsWithRawResponse:
        return self._with_raw_response


class OperationsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_slot_type_version(
        self,
        name: str,
        version: str,
        *,
        body: DeleteSlotTypeVersionRequest | DeleteSlotTypeVersionRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[str, DeleteSlotTypeVersionErrorBody]:
        """Deletes a specific version of a slot type. To delete all versions of a slot type, use the DeleteSlotType
        operation. This operation requires permissions for the lex:DeleteSlotTypeVersion action.

        Args:
            name: Value sent with the request.
            version: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_amazon_lex_model_building_v2_operations_api(
                "/slottypes/{name}/version/{version}"
            ),
            path_params=[param[str]("name", name), param[str]("version", version)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeleteSlotTypeVersionRequest | DeleteSlotTypeVersionRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[str],
            error_mapper=delete_slot_type_version_error_mapper,
            request_options=request_options,
        )

    def get_intents(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetIntentsResponse, GetIntentsErrorBody]:
        """Returns intent information as follows: If you specify the nameContains field, returns the $LATEST version of
        all intents that contain the specified string. If you don't specify the nameContains field, returns information
        about the $LATEST version of all intents. The operation requires permission for the lex:GetIntents action.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_operations_api("/intents"),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetIntentsResponse],
            error_mapper=get_intents_error_mapper,
            request_options=request_options,
        )

    def get_slot_types(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetSlotTypesResponse, GetSlotTypesErrorBody]:
        """Returns slot type information as follows: If you specify the nameContains field, returns the $LATEST version
        of all slot types that contain the specified string. If you don't specify the nameContains field, returns
        information about the $LATEST version of all slot types. The operation requires permission for the
        lex:GetSlotTypes action.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_operations_api("/slottypes"),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetSlotTypesResponse],
            error_mapper=get_slot_types_error_mapper,
            request_options=request_options,
        )

    def get_utterances_view(
        self, bot_name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetUtterancesViewResponse, GetUtterancesViewErrorBody]:
        """Use the GetUtterancesView operation to get information about the utterances that your users have made to your
        bot. You can use this list to tune the utterances that your bot responds to. For example, say that you have
        created a bot to order flowers. After your users have used your bot for a while, use the GetUtterancesView
        operation to see the requests that they have made and whether they have been successful. You might find that the
        utterance "I want flowers" is not being recognized. You could add this utterance to the OrderFlowers intent so
        that your bot recognizes that utterance. After you publish a new version of a bot, you can get information about
        the old version and the new so that you can compare the performance across the two versions. Utterance
        statistics are generated once a day. Data is available for the last 15 days. You can request information for up
        to 5 versions of your bot in each request. Amazon Lex returns the most frequent utterances received by the bot
        in the last 15 days. The response contains information about a maximum of 100 utterances for each version. If
        you set childDirected field to true when you created your bot, if you are using slot obfuscation with

        Args:
            bot_name: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_operations_api(
                "/bots/{botName}/utterances?view=aggregation"
            ),
            path_params=[param[str]("botName", bot_name)],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetUtterancesViewResponse],
            error_mapper=get_utterances_view_error_mapper,
            request_options=request_options,
        )

    def post_content(
        self,
        bot_name: str,
        bot_alias: str,
        user_id: str,
        *,
        body: PostContentRequest | PostContentRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PostContentResponse, PostContentErrorBody]:
        """Sends user input (text or speech) to Amazon Lex. Clients use this API to send text and audio requests to
        Amazon Lex at runtime. Amazon Lex interprets the user input using the machine learning model that it built for
        the bot. The PostContent operation supports audio input at 8kHz and 16kHz. You can use 8kHz audio to achieve
        higher speech recognition accuracy in telephone audio applications. In response, Amazon Lex returns the next
        message to convey to the user. Consider the following example messages: For a user input "I would like a pizza,"
        Amazon Lex might return a response with a message eliciting slot data (for example, PizzaSize): "What size pizza
        would you like?". After the user provides all of the pizza order information, Amazon Lex might return a response
        with a message to get user confirmation: "Order the pizza?". After the user replies "Yes" to the confirmation
        prompt, Amazon Lex might return a conclusion statement: "Thank you, your cheese pizza has been ordered.". Not
        all Amazon Lex messages require a response from the user. For example, conclusion statements do not require a
        response. Some messages require only a yes or no response. In addition to the message, Amazon Lex

        Args:
            bot_name: Value sent with the request.
            bot_alias: Value sent with the request.
            user_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_operations_api(
                "/bot/{botName}/alias/{botAlias}/user/{userId}/content"
            ),
            path_params=[
                param[str]("botName", bot_name), param[str]("botAlias", bot_alias), param[str]("userId", user_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PostContentRequest | PostContentRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[PostContentResponse],
            error_mapper=post_content_error_mapper,
            request_options=request_options,
        )

    def post_text(
        self,
        bot_name: str,
        bot_alias: str,
        user_id: str,
        *,
        body: PostTextRequest | PostTextRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PostTextResponse, PostTextErrorBody]:
        """Sends user input to Amazon Lex. Client applications can use this API to send requests to Amazon Lex at
        runtime. Amazon Lex then interprets the user input using the machine learning model it built for the bot. In
        response, Amazon Lex returns the next message to convey to the user an optional responseCard to display.
        Consider the following example messages: For a user input "I would like a pizza", Amazon Lex might return a
        response with a message eliciting slot data (for example, PizzaSize): "What size pizza would you like?" After
        the user provides all of the pizza order information, Amazon Lex might return a response with a message to
        obtain user confirmation "Proceed with the pizza order?". After the user replies to a confirmation prompt with a
        "yes", Amazon Lex might return a conclusion statement: "Thank you, your cheese pizza has been ordered.". Not all
        Amazon Lex messages require a user response. For example, a conclusion statement does not require a response.
        Some messages require only a "yes" or "no" user response. In addition to the message, Amazon Lex provides
        additional context about the message in the response that you might use to enhance client behavior, for example,
        to

        Args:
            bot_name: Value sent with the request.
            bot_alias: Value sent with the request.
            user_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_operations_api(
                "/bot/{botName}/alias/{botAlias}/user/{userId}/text"
            ),
            path_params=[
                param[str]("botName", bot_name), param[str]("botAlias", bot_alias), param[str]("userId", user_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PostTextRequest | PostTextRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[PostTextResponse],
            error_mapper=post_text_error_mapper,
            request_options=request_options,
        )


class AsyncOperationsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_slot_type_version(
        self,
        name: str,
        version: str,
        *,
        body: DeleteSlotTypeVersionRequest | DeleteSlotTypeVersionRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[str, DeleteSlotTypeVersionErrorBody]:
        """Deletes a specific version of a slot type. To delete all versions of a slot type, use the DeleteSlotType
        operation. This operation requires permissions for the lex:DeleteSlotTypeVersion action.

        Args:
            name: Value sent with the request.
            version: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_amazon_lex_model_building_v2_operations_api(
                "/slottypes/{name}/version/{version}"
            ),
            path_params=[param[str]("name", name), param[str]("version", version)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeleteSlotTypeVersionRequest | DeleteSlotTypeVersionRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[str],
            error_mapper=delete_slot_type_version_error_mapper,
            request_options=request_options,
        )

    async def get_intents(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetIntentsResponse, GetIntentsErrorBody]:
        """Returns intent information as follows: If you specify the nameContains field, returns the $LATEST version of
        all intents that contain the specified string. If you don't specify the nameContains field, returns information
        about the $LATEST version of all intents. The operation requires permission for the lex:GetIntents action.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_operations_api("/intents"),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetIntentsResponse],
            error_mapper=get_intents_error_mapper,
            request_options=request_options,
        )

    async def get_slot_types(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetSlotTypesResponse, GetSlotTypesErrorBody]:
        """Returns slot type information as follows: If you specify the nameContains field, returns the $LATEST version
        of all slot types that contain the specified string. If you don't specify the nameContains field, returns
        information about the $LATEST version of all slot types. The operation requires permission for the
        lex:GetSlotTypes action.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_operations_api("/slottypes"),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetSlotTypesResponse],
            error_mapper=get_slot_types_error_mapper,
            request_options=request_options,
        )

    async def get_utterances_view(
        self, bot_name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetUtterancesViewResponse, GetUtterancesViewErrorBody]:
        """Use the GetUtterancesView operation to get information about the utterances that your users have made to your
        bot. You can use this list to tune the utterances that your bot responds to. For example, say that you have
        created a bot to order flowers. After your users have used your bot for a while, use the GetUtterancesView
        operation to see the requests that they have made and whether they have been successful. You might find that the
        utterance "I want flowers" is not being recognized. You could add this utterance to the OrderFlowers intent so
        that your bot recognizes that utterance. After you publish a new version of a bot, you can get information about
        the old version and the new so that you can compare the performance across the two versions. Utterance
        statistics are generated once a day. Data is available for the last 15 days. You can request information for up
        to 5 versions of your bot in each request. Amazon Lex returns the most frequent utterances received by the bot
        in the last 15 days. The response contains information about a maximum of 100 utterances for each version. If
        you set childDirected field to true when you created your bot, if you are using slot obfuscation with

        Args:
            bot_name: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_operations_api(
                "/bots/{botName}/utterances?view=aggregation"
            ),
            path_params=[param[str]("botName", bot_name)],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetUtterancesViewResponse],
            error_mapper=get_utterances_view_error_mapper,
            request_options=request_options,
        )

    async def post_content(
        self,
        bot_name: str,
        bot_alias: str,
        user_id: str,
        *,
        body: PostContentRequest | PostContentRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PostContentResponse, PostContentErrorBody]:
        """Sends user input (text or speech) to Amazon Lex. Clients use this API to send text and audio requests to
        Amazon Lex at runtime. Amazon Lex interprets the user input using the machine learning model that it built for
        the bot. The PostContent operation supports audio input at 8kHz and 16kHz. You can use 8kHz audio to achieve
        higher speech recognition accuracy in telephone audio applications. In response, Amazon Lex returns the next
        message to convey to the user. Consider the following example messages: For a user input "I would like a pizza,"
        Amazon Lex might return a response with a message eliciting slot data (for example, PizzaSize): "What size pizza
        would you like?". After the user provides all of the pizza order information, Amazon Lex might return a response
        with a message to get user confirmation: "Order the pizza?". After the user replies "Yes" to the confirmation
        prompt, Amazon Lex might return a conclusion statement: "Thank you, your cheese pizza has been ordered.". Not
        all Amazon Lex messages require a response from the user. For example, conclusion statements do not require a
        response. Some messages require only a yes or no response. In addition to the message, Amazon Lex

        Args:
            bot_name: Value sent with the request.
            bot_alias: Value sent with the request.
            user_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_operations_api(
                "/bot/{botName}/alias/{botAlias}/user/{userId}/content"
            ),
            path_params=[
                param[str]("botName", bot_name), param[str]("botAlias", bot_alias), param[str]("userId", user_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PostContentRequest | PostContentRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[PostContentResponse],
            error_mapper=post_content_error_mapper,
            request_options=request_options,
        )

    async def post_text(
        self,
        bot_name: str,
        bot_alias: str,
        user_id: str,
        *,
        body: PostTextRequest | PostTextRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PostTextResponse, PostTextErrorBody]:
        """Sends user input to Amazon Lex. Client applications can use this API to send requests to Amazon Lex at
        runtime. Amazon Lex then interprets the user input using the machine learning model it built for the bot. In
        response, Amazon Lex returns the next message to convey to the user an optional responseCard to display.
        Consider the following example messages: For a user input "I would like a pizza", Amazon Lex might return a
        response with a message eliciting slot data (for example, PizzaSize): "What size pizza would you like?" After
        the user provides all of the pizza order information, Amazon Lex might return a response with a message to
        obtain user confirmation "Proceed with the pizza order?". After the user replies to a confirmation prompt with a
        "yes", Amazon Lex might return a conclusion statement: "Thank you, your cheese pizza has been ordered.". Not all
        Amazon Lex messages require a user response. For example, a conclusion statement does not require a response.
        Some messages require only a "yes" or "no" user response. In addition to the message, Amazon Lex provides
        additional context about the message in the response that you might use to enhance client behavior, for example,
        to

        Args:
            bot_name: Value sent with the request.
            bot_alias: Value sent with the request.
            user_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_operations_api(
                "/bot/{botName}/alias/{botAlias}/user/{userId}/text"
            ),
            path_params=[
                param[str]("botName", bot_name), param[str]("botAlias", bot_alias), param[str]("userId", user_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PostTextRequest | PostTextRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[PostTextResponse],
            error_mapper=post_text_error_mapper,
            request_options=request_options,
        )
